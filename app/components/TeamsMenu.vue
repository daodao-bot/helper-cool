<script setup lang="ts">
defineProps<{
  collapsed?: boolean
}>()

const { t } = useI18n()

const teams = ref([{
  label: t('menu.home'),
  avatar: {
    src: 'https://helper.cool/img/logo.png',
    alt: t('menu.home')
  }
}, {
  label: t('menu.chat'),
  avatar: {
    src: 'https://github.com/nuxt-hub.png',
    alt: t('menu.chat')
  }
}])
const selectedTeam = ref(teams.value[0])

const items = computed(() => {
  return [teams.value.map(team => ({
    ...team,
    onSelect() {
      selectedTeam.value = team
    }
  }))]
})
</script>

<template>
  <UDropdownMenu
    :items="items"
    :content="{ align: 'center', collisionPadding: 12 }"
    :ui="{ content: collapsed ? 'w-40' : 'w-(--reka-dropdown-menu-trigger-width)' }"
  >
    <UButton
      v-bind="{
        ...selectedTeam,
        label: collapsed ? undefined : selectedTeam?.label,
        trailingIcon: collapsed ? undefined : 'i-lucide-chevrons-up-down'
      }"
      color="neutral"
      variant="ghost"
      block
      :square="collapsed"
      class="data-[state=open]:bg-elevated"
      :class="[!collapsed && 'py-2']"
      :ui="{
        trailingIcon: 'text-dimmed'
      }"
    />
  </UDropdownMenu>
</template>
