<script setup lang="ts">
import type { CalendarDate } from '@internationalized/date'
import { DateFormatter, getLocalTimeZone, today } from '@internationalized/date'

const { locale } = useI18n()

const language = locale.value === 'zh' ? 'zh-CN' : 'en-US'

const df = new DateFormatter(language, {
  dateStyle: 'medium'
})

const date: CalendarDate = today(getLocalTimeZone())
</script>

<template>
  <UPopover :content="{ align: 'start' }" :modal="true">
    <UButton
      color="neutral"
      variant="ghost"
      icon="i-lucide-calendar"
      class="data-[state=open]:bg-elevated group"
    >
      <span class="truncate">
        {{ df.format(date.toDate(getLocalTimeZone())) }}
      </span>

      <template #trailing>
        <UIcon name="i-lucide-chevron-down" class="shrink-0 text-dimmed size-5 group-data-[state=open]:rotate-180 transition-transform duration-200" />
      </template>
    </UButton>

    <template #content>
      <div class="flex items-stretch sm:divide-x divide-default">
        <UCalendar
          v-model="date"
        />
      </div>
    </template>
  </UPopover>
</template>
