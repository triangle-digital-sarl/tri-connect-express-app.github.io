<div id="swagger-ui-container" />

<script lang="ts">
  import Card, {
    Content,
  } from '@smui/card';
  import { onMount } from 'svelte';
	import SwaggerUI from 'swagger-ui';
  import { portal } from "svelte-portal";
	import 'swagger-ui/dist/swagger-ui.css';

  onMount(async () => {
	const swaggerJson = await import('@tri/sdk/swagger.json');
		SwaggerUI({
			spec: swaggerJson,
			dom_id: '#swagger-ui-container',
		});
	});
</script>
