package model

import (
	"testing"

	"github.com/QuantumNous/new-api/common"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
)

func TestUpdateUserUsedQuotaBatchPreservesRequestCount(t *testing.T) {
	truncateTables(t)
	require.NoError(t, DB.Create(&User{
		Id:           301,
		Username:     "batch-usage-user",
		Status:       common.UserStatusEnabled,
		UsedQuota:    100,
		RequestCount: 1,
	}).Error)

	previousBatchUpdateEnabled := common.BatchUpdateEnabled
	common.BatchUpdateEnabled = true
	t.Cleanup(func() {
		common.BatchUpdateEnabled = previousBatchUpdateEnabled
	})

	UpdateUserUsedQuota(301, 20)
	UpdateUserUsedQuota(301, -40)
	batchUpdate()

	var user User
	require.NoError(t, DB.Select("used_quota", "request_count").Where("id = ?", 301).First(&user).Error)
	assert.Equal(t, 80, user.UsedQuota)
	assert.Equal(t, 1, user.RequestCount)
}

func TestUpdateUserUsedQuotaDirectPreservesRequestCount(t *testing.T) {
	truncateTables(t)
	require.NoError(t, DB.Create(&User{
		Id:           302,
		Username:     "direct-usage-user",
		Status:       common.UserStatusEnabled,
		UsedQuota:    100,
		RequestCount: 1,
	}).Error)

	previousBatchUpdateEnabled := common.BatchUpdateEnabled
	common.BatchUpdateEnabled = false
	t.Cleanup(func() {
		common.BatchUpdateEnabled = previousBatchUpdateEnabled
	})

	UpdateUserUsedQuota(302, -40)

	var user User
	require.NoError(t, DB.Select("used_quota", "request_count").Where("id = ?", 302).First(&user).Error)
	assert.Equal(t, 60, user.UsedQuota)
	assert.Equal(t, 1, user.RequestCount)
}
