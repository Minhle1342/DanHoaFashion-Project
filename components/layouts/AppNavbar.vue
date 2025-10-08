<template>
  <div class="top-navbar bg-white d-flex position-relative align-items-center">
    <div class="logo me-auto">
      <img src="/images/logo.png" alt="logo">
    </div>

    <div
      class="nav-content d-flex justify-content-center position-absolute top-50 start-50 translate-middle"
    >
      <div class="d-flex align-items-center me-5">
        <i class="bi bi-telephone-forward-fill pe-3 fs-1" />
        <div>
          <h3 class="text-muted mb-0 fw-bold">Hotline</h3>
          <span class="fw-bold">0333.506.875</span><br>
          <p class="mb-0 fw-bold">0392.429.466</p>
        </div>
      </div>
      <div class="d-flex align-items-center me-4">
        <i class="bi bi-credit-card-2-back fs-1 pe-2 mb-auto" />
        <div>
          <span class="text-muted fw-bold fs-3">Hình thức thanh toán</span>
          <p class="mb-auto fw-bold">Thanh toán linh động</p>
        </div>
      </div>
    </div>
  </div>

  <div class="bottom-navbar bg-warning">
    <ul class="list list-unstyled d-flex pt-3">
      <li class="me-5">
        <NuxtLink to="/" class="text-dark text-decoration-none fw-bold">TRANG CHỦ</NuxtLink>
      </li>
      <li class="me-5">
        <NuxtLink to="/ThoiTrangNam" class="text-dark text-decoration-none fw-bold">THỜI TRANG NAM</NuxtLink>
      </li>
      <li class="me-5">
        <NuxtLink to="/ThoiTrangNu" class="text-dark text-decoration-none fw-bold">THỜI TRANG NỮ</NuxtLink>
      </li>
      <li class="me-5">
        <NuxtLink to="/SanPhamHot" class="text-dark text-decoration-none fw-bold">SẢN PHẨM HOT</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
</script>

<style scoped>
.logo {
  width: 150px;
}

.logo img {
  width: 100%;
}

.list {
  margin-left: 130px;
}
</style>
