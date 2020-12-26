<template>
  <d-navbar-nav class="border-left flex-row" style="position:absolute;right:10%;">
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle text-nowrap px-3" v-d-toggle.user-actions>
        <img class="user-avatar rounded-circle mr-2" src="@/assets/images/avatars/0.jpg" alt="User Avatar"> <span class="d-none d-md-inline-block">Siti Amirah</span>
      </a>
      <d-collapse id="user-actions" class="dropdown-menu dropdown-menu-small">
        <!-- <d-dropdown-item><i class="material-icons">&#xE7FD;</i> Profile</d-dropdown-item> -->
        <d-dropdown-item href="/timetable"><i class="material-icons">table_chart</i> Timetable</d-dropdown-item>
        <d-dropdown-divider />
        <d-dropdown-item href="#" class="text-danger">
          <i class="material-icons text-danger">&#xE879;</i> Logout
        </d-dropdown-item>
      </d-collapse>
    </li>
  </d-navbar-nav>

</template>

<style>
  .nav-link:hover {
    cursor: pointer;
  }
</style>
