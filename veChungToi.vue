<template>
  <div class="about-page bg-light py-5">
    <!-- Tiêu đề -->
    <div class="container text-center mb-5">
      <h1 class="fw-bold mb-3 text-uppercase text-dark">Về Chúng Tôi</h1>
      <p class="text-muted w-75 mx-auto">
        <strong>DanHoa Bridal</strong> – thương hiệu chuyên thiết kế và cung cấp
        <span class="fw-semibold">trang phục & phụ kiện truyền thống Khmer / Thái Lan</span>.
        Chúng tôi mang đến nét đẹp văn hoá, tinh tế và hiện đại trong từng sản phẩm.
      </p>
    </div>

    <!-- Giới thiệu thương hiệu -->
    <div class="container mb-5">
      <div class="row align-items-center g-4">
        <div class="col-md-6">
          <img
            src="@/assets/images/gioiThieu.jpg"
            alt="DanHoa Bridal"
            class="img-fluid rounded shadow-sm"
          />
        </div>
        <div class="col-md-6">
          <h3 class="fw-bold text-uppercase mb-3">Câu chuyện thương hiệu</h3>
          <p class="text-secondary lh-lg">
            Với niềm đam mê thời trang truyền thống và mong muốn tôn vinh vẻ đẹp của văn hoá
            Khmer – Thái Lan, <strong>DanHoa Bridal</strong> ra đời như một biểu tượng của sự kết hợp
            giữa tinh hoa cổ truyền và hơi thở hiện đại.
          </p>
          <p class="text-secondary lh-lg">
            Tại đây, mỗi bộ trang phục đều được thiết kế tỉ mỉ, từ chất liệu vải gấm, ren, chiffon
            cho đến từng đường chỉ, nhằm tôn lên sự sang trọng và duyên dáng của người phụ nữ.
          </p>
        </div>
      </div>
    </div>

    <!-- Sản phẩm & dịch vụ -->
    <div class="container mb-5">
      <h3 class="fw-bold text-uppercase text-center mb-4">Sản phẩm & Dịch vụ</h3>
      <div class="row text-center g-4">
        <div class="col-md-4">
          <div class="card border-0 shadow-sm h-100 p-3">
            <div class="card-body">
              <i class="bi bi-gem text-danger fs-1 mb-3"></i>
              <h5 class="fw-bold">Trang phục Khơ Me / Thái Lan</h5>
              <p class="text-muted">
                Bộ sưu tập độc quyền mang đậm bản sắc văn hoá, phù hợp cho chụp ảnh, lễ cưới và sự kiện truyền thống.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card border-0 shadow-sm h-100 p-3">
            <div class="card-body">
              <i class="bi bi-bag-heart text-warning fs-1 mb-3"></i>
              <h5 class="fw-bold">Phụ kiện truyền thống</h5>
              <p class="text-muted">
                Trang sức, khăn choàng, dây lưng và phụ kiện độc đáo tôn lên vẻ đẹp kiêu sa và tinh tế.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card border-0 shadow-sm h-100 p-3">
            <div class="card-body">
              <i class="bi bi-palette text-primary fs-1 mb-3"></i>
              <h5 class="fw-bold">Vải Gấm - Vải Ren</h5>
              <p class="text-muted">
                Cung cấp các loại vải gấm, ren cao cấp từ Khmer và Thái Lan, phù hợp cho thiết kế thời trang.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Thông tin liên hệ -->
    <div class="container mb-5">
      <div class="row align-items-center">
        <div class="col-md-6">
          <h3 class="fw-bold text-uppercase mb-3">Liên hệ với chúng tôi</h3>
          <ul class="list-unstyled fs-6">
            <li><i class="bi bi-geo-alt text-danger"></i> Ấp Giồng Trôm - xã Mỹ Chánh - huyện Châu Thành - tỉnh Trà Vinh</li>
            <li><i class="bi bi-telephone text-primary"></i> 0333.506.875 - 0392.429.466</li>
            <li><i class="bi bi-chat-dots text-success"></i> Zalo: 0981.269.144</li>
          </ul>
        </div>
        <div class="col-md-6">
          <!-- Google Map -->
          <div class="ratio ratio-16x9 shadow-sm rounded">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15737.91821284394!2d106.308748!3d9.900473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a001356e5dcab9%3A0x4da56e9d9b3a6927!2zSMOyYSBDaMOidSBUaOG6pW5oLCBUcsOgIFZpbmg!5e0!3m2!1svi!2s!4v1698150200000!5m2!1svi!2s"
              width="100%"
              height="350"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Không cần logic JS phức tạp ở trang giới thiệu
</script>

<style scoped>
.about-page h1,
.about-page h3 {
  font-family: "Playfair Display", serif;
}

.about-page p {
  font-size: 1rem;
}

.card:hover {
  transform: translateY(-5px);
  transition: 0.3s ease;
}
</style>
