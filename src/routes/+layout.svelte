<svelte:window on:resize={setMiniWindow} />

<svelte:head>
  <link rel="stylesheet" href="{assets}/smui.css" />
  <link rel="stylesheet" href="{assets}/site.css" />

  {#if theme}
    <link rel="stylesheet" href="{assets}/smui-{theme}.css" />
    <link rel="stylesheet" href="{assets}/site-{theme}.css" />

    {#if lightTheme === false}
      <link
        rel="stylesheet"
        href="{assets}/smui-{theme}-dark.css"
        media="screen"
      />
      <link
        rel="stylesheet"
        href="{assets}/site-{theme}-dark.css"
        media="screen"
      />
    {:else if lightTheme !== true}
      <!-- SMUI Styles -->
      <link
        rel="stylesheet"
        href="{assets}/smui-{theme}-dark.css"
        media="screen and (prefers-color-scheme: dark)"
      />

      <link
        rel="stylesheet"
        href="{assets}/site-{theme}-dark.css"
        media="screen and (prefers-color-scheme: dark)"
      />
    {/if}
  {:else if lightTheme === false}
    <link rel="stylesheet" href="{assets}/smui-dark.css" media="screen" />
    <link rel="stylesheet" href="{assets}/site-dark.css" media="screen" />
  {:else if lightTheme !== true}
    <link
      rel="stylesheet"
      href="{assets}/smui-dark.css"
      media="screen and (prefers-color-scheme: dark)"
    />
    <link
      rel="stylesheet"
      href="{assets}/site-dark.css"
      media="screen and (prefers-color-scheme: dark)"
    />
  {/if}
</svelte:head>

{#if iframe}
  <slot />
{:else}
  <TopAppBar variant="static" class="demo-top-app-bar">
    <Row>
      <Section>
        {#if miniWindow}
          <IconButton
            class="material-icons"
            on:click={() => (drawerOpen = !drawerOpen)}>menu</IconButton
          >
        {/if}
        <Title
          tag="a"
          href="/"
          on:click={() => (activeSection = undefined)}
          class="mdc-theme--on-surface"
          style={miniWindow ? 'padding-left: 0;' : ''}
        >
          {miniWindow ? 'SMUI' : 'Svelte Material UI'}
        </Title>
      </Section>
      <Section align="end" toolbar style="color: var(--mdc-on-surface, #000);">
        {#each (activeSection && activeSection.repos) || [] as repo}
          <IconButton
            href={repo}
            target="_blank"
            title="View Docs: {repo.split('/').slice(-1)[0]}"
          >
            <Icon tag="svg" viewBox="0 0 24 24">
              <path fill="currentColor" d={mdiFileDocument} />
            </Icon>
          </IconButton>
        {:else}
          <IconButton
            href="https://github.com/hperrin/svelte-material-ui"
            title="SMUI on GitHub"
          >
            <Icon tag="svg" viewBox="0 0 24 24">
              <path fill="currentColor" d={siGithub.path} />
            </Icon>
          </IconButton>
        {/each}
        <div style="display: inline-block;">
          <IconButton
            on:click={() => themeMenu.setOpen(true)}
            title="Pick a theme or toggle dark mode."
          >
            <Icon tag="svg" viewBox="0 0 24 24">
              <path fill="currentColor" d={mdiPalette} />
            </Icon>
          </IconButton>
          <Menu bind:this={themeMenu}>
            <List>
              <SelectionGroup>
                <Item
                  on:SMUI:action={() => (lightTheme = null)}
                  selected={lightTheme == null}
                >
                  <SelectionGroupIcon>
                    <i class="material-icons">check</i>
                  </SelectionGroupIcon>
                  <Text>Follow System</Text>
                </Item>
                {#each [{ label: 'Light', value: true }, { label: 'Dark', value: false }] as item}
                  <Item
                    on:SMUI:action={() => (lightTheme = item.value)}
                    selected={lightTheme === item.value}
                  >
                    <SelectionGroupIcon>
                      <i class="material-icons">check</i>
                    </SelectionGroupIcon>
                    <Text>{item.label}</Text>
                  </Item>
                {/each}
              </SelectionGroup>
              <Separator />
              <SelectionGroup>
                <Item
                  on:SMUI:action={() => (theme = null)}
                  selected={theme == null}
                >
                  <SelectionGroupIcon>
                    <i class="material-icons">check</i>
                  </SelectionGroupIcon>
                  <Text>Svelte</Text>
                </Item>
                {#each themes as item}
                  <Item
                    on:SMUI:action={() => (theme = item.value)}
                    selected={theme === item.value}
                  >
                    <SelectionGroupIcon>
                      <i class="material-icons">check</i>
                    </SelectionGroupIcon>
                    <Text>{item.label}</Text>
                  </Item>
                {/each}
              </SelectionGroup>
            </List>
          </Menu>
        </div>
      </Section>
    </Row>
  </TopAppBar>
  <div class="drawer-container">
    <Drawer
      bind:this={drawer}
      variant={miniWindow ? 'modal' : undefined}
      bind:open={drawerOpen}
      class="demo-drawer mdc-theme--secondary-bg {miniWindow
        ? 'demo-drawer-adjust'
        : 'hide-initial-small'}"
    >
      <!-- 44px padding to offset the space taken by Glory to Ukraine and Trans Rights messages -->
      <Content style="padding-bottom: 44px;">
        <List>
          {#each sections as section (section.name)}
            {#if 'separator' in section}
              <Separator />
            {:else}
              <Item
                bind:this={section.component}
                nonInteractive={!('route' in section || 'shortcut' in section)}
                href={'route' in section
                  ? section.route
                  : 'shortcut' in section
                    ? section.shortcut
                    : undefined}
                activated={section === activeSection}
                style={section.indent
                  ? 'margin-left: ' + section.indent * 25 + 'px;'
                  : ''}
              >
                <Text class="mdc-theme--on-secondary">{section.name}</Text>
              </Item>
            {/if}
          {/each}
        </List>
      </Content>
    </Drawer>

    {#if miniWindow}
      <Scrim />
    {/if}
    <AppContent class="demo-app-content">
      <main class="demo-main-content" bind:this={mainContent}>
        <slot />
      </main>
    </AppContent>
  </div>
{/if}

<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import { mdiFileDocument, mdiPalette } from '@mdi/js';
  import { siDiscord, siMastodon, siGithub } from 'simple-icons';
  import TinyGesture from 'tinygesture';
  import { assets } from '$app/paths';
  import { page } from '$app/stores';

  import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';
  import Drawer, { Content, Scrim, AppContent } from '@smui/drawer';
  import IconButton from '@smui/icon-button';
  import Menu, { SelectionGroup, SelectionGroupIcon } from '@smui/menu';
  import List, { Item, Text, Separator } from '@smui/list';
  import { Icon } from '@smui/common';
  import {sections} from './sections'

  const iframe = $page.url.pathname.includes('/iframe');

  let drawer: Drawer;
  let mainContent: HTMLElement;
  let miniWindow = false;
  let drawerOpen = false;

  const themes = [
    { label: 'Material', value: 'material' },
    { label: 'Fixation', value: 'fixation' },
  ];
  let themeMenu: Menu;
  let lightTheme: boolean | null = null;
  let theme: string | null = null;


  $: activeSection = sections.find(
    (section) =>
      'route' in section &&
      routesEqual(section.route ?? '', $page.url.pathname),
  ) as DemoSection | undefined;
  let previousPagePath: string | undefined = undefined;
  $: if (mainContent && previousPagePath !== $page.url.pathname) {
    drawerOpen = false;
    const hashEl =
      window.location.hash &&
      document.querySelector<HTMLElement>(window.location.hash);
    const top = (hashEl && hashEl.offsetTop) || 0;
    mainContent.scrollTop = top;
    previousPagePath = $page.url.pathname;
  }

  onMount(() => setTimeout(setMiniWindow, 0));

  function routesEqual(a: string, b: string) {
    return (
      (a.endsWith('/') ? a.slice(0, -1) : a) ===
      (b.endsWith('/') ? b.slice(0, -1) : b)
    );
  }

  function setMiniWindow() {
    if (typeof window !== 'undefined') {
      miniWindow = window.innerWidth < 720;
    }
  }
</script>

<style>
  @media (max-width: 720px) {
    * > :global(.hide-initial-small) {
      display: none;
    }
  }
</style>
