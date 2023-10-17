<script setup>
</script>

<template>
  <!-- sidebar -->
  <div class="fixed w-64 top-0 left-0 h-screen bg-gray-900 p-4">
    <a href="" class="flex items-center pb-4 w-full border-b border-b-gray-800">
      <img src="https://placeholder.co/32x32" class="w-10 h-10 rounded object-cover" alt="">
      <span class="text-lg font-bold text-white0 ml-3">Logo</span>
    </a>
    <ul class="mt-4">
      <li class="mb-1 group active">
        <a href="javascript:void" class="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-gray-100">
          <i class="ri-home-2-line mr-3 text-lg"></i>
          <span class="text-sm">Dashboard</span>
        </a>
      </li>
      <li class="mb-1 group">
        <a href="javascript:void" class="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-gray-100">
          <i class="ri-instance-line mr-3 text-lg"></i>
          <span class="text-sm">Orders</span>
          <i class="ri-arrow-right-s-line ml-auto group-[.active]:rotate-90"></i>
        </a>
        <ul class="pl-7 mt-2">
          <li class="mb-4">
            <a href="javascript:void" class="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Active order</a>
          </li>
          <li class="mb-4">
            <a href="javascript:void" class="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Complete order</a>
          </li>
          <li class="mb-4">
            <a href="javascript:void" class="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Canceled order</a>
          </li>
        </ul>
      </li>
      <li class="mb-1 group">
        <a href="javascript:void" class="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-gray-100">
          <i class="ri-flashlight-line mr-3 text-lg"></i>
          <span class="text-sm">Services</span>
          <i class="ri-arrow-right-s-line ml-auto group-[.active]:rotate-90"></i>
        </a>
        <ul class="pl-7 mt-2">
          <li class="mb-4">
            <a href="javascript:void" class="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Manage service</a>
          </li>
        </ul>
      </li>
      <li class="mb-1 group">
        <a href="javascript:void" class="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-gray-100">
          <i class="ri-settings-2-line mr-3 text-lg"></i>
          <span class="text-sm">Settings</span>
          <i class="ri-arrow-right-s-line ml-auto group-[.active]:rotate-90"></i>
        </a>
        <!-- <ul class="pl-7 mt-2">
          <li class="mb-4">
            <a href="javascript:void" class="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Active order</a>
          </li>
          <li class="mb-4">
            <a href="javascript:void" class="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Complete order</a>
          </li>
          <li class="mb-4">
            <a href="javascript:void" class="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Canceled order</a>
          </li>
        </ul> -->
      </li>
    </ul>
  </div>
   <!-- end sidebar -->
</template>