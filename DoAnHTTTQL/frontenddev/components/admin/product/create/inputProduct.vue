<template>
  <div class="form-group">
    <div class="row-form-item">
      <div class="l">
        <div class="form-input-group">
          <div class="title-input">
            <h3 class="text-title">Tên đồ uống:</h3>
          </div>
          <input
            type="text"
            class="input-group"
            placeholder="Nhập tên đồ uống ..."
            v-model="nameProduct"
            @input="changeName"
          />
        </div>
      </div>
      <!--  -->
      <div class="r">
        <div class="form-input-group">
          <div class="title-input">
            <h3 class="text-title">Trạng thái:</h3>
          </div>
          <input
            type="text"
            class="input-group"
            placeholder="Nhập trạng thái ..."
            v-model="status"
            @input="changeStatus"
          />
        </div>
      </div>
    </div>
    <!--  -->
    <div class="row-form-item">
      <div class="l">
        <div class="form-input-group">
          <div class="title-input">
            <h3 class="text-title">Giá bán:</h3>
          </div>
          <input
            type="text"
            class="input-group"
            placeholder="Nhập giá bán ..."
            v-model="money"
            @input="changeMoney"
          />
        </div>
      </div>
      <!--  -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nameProduct: "",
      status: "",
      waitInput: null,
      dataProduct: {
        status: "",
        name: "",
        money: "",
      },
    };
  },
  methods: {
    changeName() {
      clearTimeout(this.waitInput);
      this.waitInput = setTimeout(() => {
        this.dataProduct.name = this.nameProduct;
        this.$emit("getValue", this.dataProduct);
      }, 500);
    },

    changeStatus() {
      clearTimeout(this.waitInput);
      this.waitInput = setTimeout(() => {
        this.dataProduct.status = this.status;
        this.$emit("getValue", this.dataProduct);
      }, 500);
    },
    changeMoney() {
      clearTimeout(this.waitInput);
      this.waitInput = setTimeout(() => {
        this.dataProduct.money = this.money;
        this.$emit("getValue", this.dataProduct);
      }, 500);
    },
  },
};
</script>

<style lang="scss" scoped>
.form-group {
  width: 100%;
}
.row-form-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
  .l {
    width: 48%;
  }
  .r {
    width: 48%;
  }
}

.row-form-item:last-child {
  margin-bottom: 0;
}

.form-input-group {
  width: 100%;
  .title-input {
    margin-bottom: 5px;
    .text-title {
      font-size: 16px;
    }
  }
  .input-group {
    padding: 10px 18px;
    color: #222a42;
    border: 1px solid #1d253b80;
    border-radius: 10px;
    width: 100%;
    outline: none;
  }

  .input-group:hover {
    border-color: #e14eca;
  }

  .input-group:focus {
    border-color: #e14eca;
  }

  .area-group {
    padding: 10px 18px;
    color: #222a42;
    border: 1px solid #1d253b80;
    border-radius: 10px;
    width: 100%;
    outline: none;
  }

  .area-group:hover {
    border-color: #e14eca;
  }

  .area-group:focus {
    border-color: #e14eca;
  }
}
</style>
