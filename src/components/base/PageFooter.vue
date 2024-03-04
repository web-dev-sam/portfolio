<script setup lang="ts">
import IconGitHub from '@/components/icons/IconGitHub.vue'
import IconLinkedIn from '@/components/icons/IconLinkedIn.vue'
import IconDevTo from '@/components/icons/IconDevTo.vue'
</script>

<template>
  <footer>
    <ul class="flex justify-center gap-8 py-8">
      <li>&copy; 2024 Samuel Braun</li>
      <li class="flex-1"></li>
      <li>
        <a
          class="hover:opacity-85"
          href="https://github.com/web-dev-sam/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconGitHub />
        </a>
      </li>
      <li>
        <a
          class="hover:opacity-85"
          href="https://www.linkedin.com/in/samuel-braun/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconLinkedIn />
        </a>
      </li>
      <li>
        <a
          class="hover:opacity-85"
          href="https://dev.to/samuel-braun"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconDevTo />
        </a>
      </li>
    </ul>
  </footer>
</template>
