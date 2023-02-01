<template>
  <div class="form-group">
    <div class="row-form-item">
      <div class="l">
        <div class="form-input-group">
          <div class="title-input">
            <h3 class="text-title">Tên đồ uống:</h3>
          </div>
          <div class="selected-input">
            <a-select mode="multiple" style="width: 100%" placeholder="Chọn đồ uống" @change="handleChange">
              <a-select-option v-for="i in listProd" :key="i._id">
                {{ i.name }} - {{ i.money }}
              </a-select-option>
            </a-select>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="r">
        <div class="form-input-group">
          <div class="title-input">
            <h3 class="text-title">Trạng thái:</h3>
          </div>
          <input type="text" class="input-group" placeholder="Nhập trạng thái ..." v-model="status"
            @input="changeStatus" />
        </div>
      </div>
    </div>
    <!--  -->
    <div class="row-form-item">
      <div class="l">
        <div class="form-input-group">
          <div class="title-input">
            <h3 class="text-title">Số lượng:</h3>
          </div>
          <input type="number" class="input-group" placeholder="Nhập trạng thái ..." v-model="quantily"
            :disabled="true" />
        </div>
      </div>
      <!--  -->
      <div class="r">
        <div class="form-input-group">
          <div class="title-input count-money">
            <h3 class="text-title">Tổng tiền:</h3>
            <span class="btn-count-money" @click="moneyBill">Tính tiền</span>
          </div>
          <input type="text" class="input-group" placeholder="Tổng tiền ..." v-model="quantilyTest" :disabled="true" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import multiSelect from "../selectName.vue";
export default {
  components: { multiSelect },
  data() {
    return {
      status: "",
      quantily: 0,
      quantilyTest: 0,
      waitInput: null,
      listProd: [],
      arrProd: [],
      arrMoney: [],
      dataBill: {
        status: "",
        quantily: 0,
        amount: "",
      },
    };
  },
  mounted() {
    this.fetchProd();
  },
  methods: {
    changeStatus() {
      clearTimeout(this.waitInput);
      this.waitInput = setTimeout(() => {
        this.dataBill.status = this.status;
        this.$emit("getValue", this.dataBill);
      }, 500);
    },

    async fetchProd() {
      const url = process.env.API_SERVER;
      const response = await this.$axios
        .get(url + "/api/product")
        .then((res) => {
          this.listProd = res.data.data;
        });
    },

    handleChange(value) {
      for (let item in this.listProd) {
        for (let val in value) {
          if (this.listProd[item]._id == value[val]) {
            this.arrProd.push(this.listProd[item]);
            this.arrProd = [...new Set(this.arrProd)]
          }
        }
      }
      this.$emit("getListProd", [...new Set(this.arrProd)]);
      this.quantily = [...new Set(this.arrProd)].length;
      this.dataBill.quantily = this.quantily;
      this.$emit("getValue", this.dataBill);
    },

    moneyBill() {
      let totalMoney = 0;
      const setList = [...new Set(this.arrProd)]
      for (let item in setList) {
        totalMoney = totalMoney + Number(this.arrProd[item].money);
      }
      this.quantilyTest = Number(totalMoney) * Number(this.arrProd.length)
      this.dataBill.amount = this.quantilyTest;
      this.$emit("getValue", this.dataBill);
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
      margin-bottom: 0;
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

  .count-money {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    .btn-count-money {
      margin-left: 10px;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .btn-count-money:hover {
      color: #e14eca;
    }
  }
}
</style>
