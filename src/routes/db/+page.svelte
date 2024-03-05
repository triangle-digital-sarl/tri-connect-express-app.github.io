<script lang="ts">
  import Doc from '@tri/db/erd/db.md';
  import { portal } from "svelte-portal";

</script>

<div use:portal={'main'} hidden>
  <Doc />
</div>
