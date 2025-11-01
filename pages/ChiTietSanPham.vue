<template>
  <div class="container-fluid mx-auto p-6">
    <!-- Phần trên: Hình ảnh và thông tin -->
    <div class="row gap-6">
      <!-- Hình ảnh sản phẩm -->
      <div class="col-6 flex d-flex justify-content-center pb-3">
        <img
          :src="product.image"
          alt="Ảnh sản phẩm"
          class=" rounded shadow-lg" style="width: 300px;"
        />
      </div>

      <!-- Thông tin sản phẩm -->
      <div class="col-6">
        <h2 class="text-2xl font-bold mb-3">{{ product.tenSanPham }}</h2>

        <p class="text-gray-700">
          <span class="font-semibold">Giá mua:</span>
          {{ formatCurrency(product.giaMua) }}
        </p>

        <p class="text-gray-700">
          <span class="font-semibold">Giá thuê:</span>
          {{ formatCurrency(product.giaThue) }}
        </p>

        <p class="mt-2">
          <span class="font-semibold">Tình trạng:</span>
           <span
            :class="product.tinhTrang === 'CÒN HÀNG' ? ' text-danger fw-bold' : 'text-gray-500'"
          >
            {{ product.tinhTrang }}
          </span>
        </p>

        <div class="mt-3">
          <h3 class="font-semibold mb-1">Mô tả:</h3>
          <p class="text-gray-600 whitespace-pre-line">
            {{ product.moTa }}
          </p>
        </div>

        <p class="mt-3">
          <span class="font-semibold">Kho:</span> {{ product.kho }}
        </p>

        <button
          class="btn btn-warning text-light font-semibold btn-lg"
        >
          Liên hệ
        </button>

        <p class="mt-4 text-sm text-gray-800">
          ĐẶT MUA QUA SỐ ĐIỆN THOẠI:
          <span class="font-semibold fw-bold">{{ product.soDienThoai }}</span>
        </p>
      </div>
    </div>

    <!-- Phần thông tin sản phẩm chi tiết -->
    <div class="mt-10 border rounded-lg p-6 bg-gray-50 container my-3">
      <h3 class="text-lg font-semibold text-center mb-3">Thông tin sản phẩm</h3>
      <p class="text-gray-700 whitespace-pre-line leading-relaxed">
        {{ product.thongTinSanPham }}
      </p>
    </div>

    <h4 class="text-center fw-bold mb-4">Các sản phẩm liên quan</h4>

    <div class="row justify-content-center">
      <div
        v-for="(item, index) in products"
        :key="index"
        class="col-6 col-md-3 mb-4"
      >
        <div class="card h-100 shadow-sm border-0 hover-card">
          <img
            :src="item.image"
            class="card-img-top rounded-top"
            alt="Ảnh sản phẩm"
            style="height: 280px; object-fit: cover"
          />
          <div class="card-body text-center">
            <h6 class="fw-semibold">{{ item.tenSanPham }}</h6>
            <p class="text-danger mb-0">
              Giá thuê: {{ formatCurrency(item.giaThue) }}
            </p>
            <p class="text-muted text-decoration-line-through small mb-1">
              {{ formatCurrency(item.giaThueCu) }}
            </p>
            <p class="text-dark">
              Giá mua: {{ formatCurrency(item.giaMua) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const product = ref({
  image:
    "src/assets/images/z6960243793460_096fc2420f7e115809b9a74bf2f1c708.jpg", // ảnh minh họa
  tenSanPham: "Đồ Dân Tộc",
  giaMua: 1259000,
  giaThue: 259000,
  tinhTrang: "CÒN HÀNG",
  moTa: `Đơn giản và cá tính, đầm maxi cổ yếm của thương hiệu BCBG Generation có thể cùng bạn đến nhiều sự kiện như dạo phố hoặc tham dự buổi tiệc trang trọng.\nPhía sau độc đáo và duyên dáng tạo điểm nhấn thu hút và ấn tượng.\nChất liệu chiffon – Cổ yếm.`,
  kho: 100,
  soDienThoai: "0123456789",
  thongTinSanPham: `Đơn giản và cá tính, đầm maxi cổ yếm của thương hiệu BCBG Generation có thể cùng bạn đến nhiều sự kiện như dạo phố hoặc tham dự buổi tiệc trang trọng.
Phía sau độc đáo và duyên dáng tạo điểm nhấn thu hút và ấn tượng
- Chất liệu chiffon
- Cổ yếm
- Không tay
- Có cúc cài và khóa kéo ở phía sau
- Lớp lót trong ngắn
- Màu sắc: Xanh lơ
- Hướng dẫn sử dụng:
  + Giặt riêng sản phẩm với chất tẩy nhẹ
  + Không được vắt
  + Không được tẩy
  + Không được sấy khô
  + Ủi nhiệt độ thấp mặt trái sản phẩm
- Thành phần chất liệu: 100% Polyester`,
});

function formatCurrency(value) {
  return value.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
}


const products = ref([
  {
    image:
      "https://danhoabridal.vn/wp-content/uploads/2023/04/Do-dan-toc.jpg",
    tenSanPham: "Tên sản phẩm",
    giaThue: 599000,
    giaThueCu: 899000,
    giaMua: 1009000,
  },
  {
    image:
      "https://danhoabridal.vn/wp-content/uploads/2023/05/Trang-phuc-1.jpg",
    tenSanPham: "Tên sản phẩm",
    giaThue: 599000,
    giaThueCu: 899000,
    giaMua: 1009000,
  },
  {
    image:
      "https://danhoabridal.vn/wp-content/uploads/2023/05/Trang-phuc-2.jpg",
    tenSanPham: "Tên sản phẩm",
    giaThue: 599000,
    giaThueCu: 899000,
    giaMua: 1009000,
  },
  {
    image:
      "https://danhoabridal.vn/wp-content/uploads/2023/05/Trang-phuc-3.jpg",
    tenSanPham: "Tên sản phẩm",
    giaThue: 599000,
    giaThueCu: 899000,
    giaMua: 1009000,
  },
]);


</script>

<style scoped>
.hover-card {
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.hover-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
}
</style>
