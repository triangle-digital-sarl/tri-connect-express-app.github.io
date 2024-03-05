
<script lang="ts">
  import {onMount} from 'svelte';
  import { page } from '$app/stores'

  const componentsMap = {
    '01_Introduction_and_Goals': import('./01_Introduction_and_Goals.md'),
    '02_Architecture_Constraints': import('./02_Architecture_Constraints.md'),
    '03_Context_and_scope': import('./03_Context_and_scope.md'),
    '04_Solution_Strategy': import('./04_Solution_Strategy.md'),
    '05_Building_Block_View': import('./05_Building_Block_View.md'),
    '06_Runtime_View': import('./06_Runtime_View.md'),
    '07_Deployment_View': import('./07_Deployment_View.md'),
    '08_Crosscutting_Concepts': import('./08_Crosscutting_Concepts.md'),
    '09_Architecture_Decisions': import('./09_Architecture_Decisions.md'),
    '10_QualityRequirements': import('./10_QualityRequirements.md'),
    '11_Risks_and_Technical_Debt': import('./11_Risks_and_Technical_Debt.md'),
    '12_Glossary': import('./12_Glossary.md'),
  }

  $: key = $page.params.sub_sections;

</script>

  {#await componentsMap[key]}
    <!-- promise is pending -->
  {:then Component}
      <svelte:component this={Component.default} />
  {/await}
