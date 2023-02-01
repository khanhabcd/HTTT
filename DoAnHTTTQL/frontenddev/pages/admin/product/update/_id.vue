<template>
  <adminLayout>
    <div class="card-container content-page">
      <div class="title-card">
        <h3 class="text-title">Cập nhật đồ uống</h3>
      </div>
      <!--  -->
      <updateProduct
        :getProduct="dataProduct"
        @getValue="valueInput"
        :checkSave="checkSave"
      />
      <!--  -->
      <div class="line"></div>
      <!--  -->
      <div class="btn-action-group">
        <button class="btn-action btn-cancel" @click="handleBack">Hủy</button>
        <button
          class="btn-action btn-save"
          @click="handleSave"
          :disabled="loadingSave"
        >
          <span v-if="loadingSave"><a-icon type="loading" /></span>
          <span v-else>Lưu</span>
        </button>
      </div>
    </div>
  </adminLayout>
</template>

<script>
import updateProduct from "../../../../components/admin/product/update/updateProduct.vue";
import adminLayout from "../../../../layouts/indexAdmin.vue";

export default {
  components: {
    adminLayout,
    updateProduct,
  },
  data() {
    return {
      loadingSave: false,
      dataProduct: {
        name: "",
        status: "",
        money: "",
      },
      checkSave: false,
      getIdProduct: null,
    };
  },
  mounted() {
    this.getID();
    this.fetchProduct();
  },

  methods: {
    handleBack() {
      this.$router.push({
        path: "/admin/product",
      });
    },

    async fetchProduct() {
      const url = process.env.API_SERVER;
      const response = await this.$axios.get(
        url + "/api/get-product/" + this.getIdProduct
      );
      if (response.data && response.data.success == true) {
        this.dataProduct = {
          name: response.data.data.name,
          status: response.data.data.status,
          money: response.data.data.money,
        };
      }
    },

    valueInput(value = {}) {
      this.dataProduct = {
        name: value.name,
        money: value.money,

        status: value.status,
      };
    },

    beforSave() {
      this.checkSave = !this.checkSave;
      if (!this.dataProduct.name && this.dataProduct.name.trim() == "") {
        this.$notify({
          type: "error",
          title: "Thất bại !",
          text: "Bạn chưa nhập tên đồ uống !",
        });
        return false;
      }
      if (!this.dataProduct.money && this.dataProduct.money.trim() == "") {
        this.$notify({
          type: "error",
          title: "Thất bại !",
          text: "Bạn chưa nhập giá tiền !",
        });
        return false;
      }
      return true;
    },

    async handleSave() {
      let check = await this.beforSave();
      if (check) {
        this.loadingSave = true;

        const url = process.env.API_SERVER;
        const response = await this.$axios.post(
          url + "/api/product/update/" + this.getIdProduct,
          {
            name: this.dataProduct.name,
            status: this.dataProduct.status,
            money: this.dataProduct.money,
          }
        );
        if (response.data && response.data.success == true) {
          this.$notify({
            type: "success",
            title: "Thành công !",
            text: response.data.message,
          });
          setTimeout(() => {
            this.$router.push({
              path: "/admin/product",
            });
          }, 1500);
        } else {
          this.$notify({
            type: "error",
            title: "Thất bại !",
            text: response.data.message,
          });
        }
      }
    },
    getID() {
      this.getIdProduct = this.$route.params.id;
    },
  },
};
</script>

<style lang="scss" scoped>
.title-card {
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .text-title {
    margin-bottom: 0;
    font-size: 18px;
    font-weight: bold;
  }
}

// style btn action
.btn-action {
  width: 115px;
  padding: 11px 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 10px;
  font-weight: bold;
  outline: none;
}
.btn-cancel {
  margin-right: 15px;
  color: #1d253b80;
  background: #fff;
  border: 1px solid #1d253b80;
}
.btn-cancel:hover {
  border: 1px solid #e14eca;
  color: #e14eca;
}

.btn-save {
  color: #fff;
  background: #e14ecab3;
  border: 1px solid #e14ecab3;
}

.btn-save:hover {
  background: #e14eca;
  border: 1px solid #e14eca;
}
</style>
