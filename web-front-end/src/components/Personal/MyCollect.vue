<template>
  <div class="nearlyRead">
    <div class="readDetail" v-for="(item, index) in book">
      <div class="nearlyTime">
        <span class="year">{{new Date(item.updated_at).getFullYear()}}</span>
        <span class="monthAday">{{ `${new Date(item.updated_at).getMonth()}月 ${new Date(item.updated_at).getDate()}日`
          }}</span>
      </div>
      <div class="bookInfo" @click="redirectToBook(item.id)">
        <img :src="item.cover" alt="">
        <div class="detailInfo">
          <span class="bookName">{{item.name}}</span>
          <span class="readProgress">{{item.author}}</span>
          <span class="readRecord">{{item.company}}</span>
          <!-- <span class="continueRead"><el-button type="text">继续阅读</el-button></span> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        book: []
      };
    },
    created() {
      this.getNearlyBook()
    },
    methods: {
      getNearlyBook() {
        this.$axios.get('/user/collections')
          .then((result) => {
            this.book = result.data.collection
          }).catch((err) => {
            console.log(err);
          });
      },
      redirectToBook(bookId) {
        this.$router.push({
          path: `/bookinfo/${bookId}`
        })
      }
    }
  }

</script>

<style lang="scss" scoped>
  .nearlyRead {
    width: 100%;
    height: 600px; // background-color: salmon;
    margin-top: 15px;

    .readDetail {
      width: 100%;
      height: 150px;
      margin-bottom: 30px;

      .nearlyTime {
        height: 100%;
        width: 99px;
        float: left; // background-color: rosybrown;
        color: #333;
        border-right: 1px solid #E0E0E0;

        .year {
          width: 100%;
          float: left;
          font-size: 25px;
        }

        .monthAday {
          margin-top: 10px;
          float: left;
        }
      }

      .bookInfo {
        height: 100%;
        margin-left: 5%;
        width: 600px;
        float: left; // background-color: plum;
        padding-bottom: 15px;
        border-bottom: 1px solid #E0E0E0;

        img {
          height: 150px;
          width: 150px;
          float: left;
        }

        .detailInfo {
          float: left;
          height: 100%;
          margin-left: 30px;
          width: 350px;

          .bookName {
            height: 80px;
            line-height: 80px;
            width: 100%;
            float: left;
            font-size: 20px;
            font-weight: 400;
          }

          .readProgress {
            height: 40px;
            line-height: 40px;
            float: left;
            font-size: 15px;
            color: #787d82;
            margin-right: 15px;
          }

          .readRecord {
            height: 40px;
            line-height: 40px;
            float: left;
            font-size: 15px;
            color: #787d82;
          }

          .continueRead {
            float: right;
          }
        }
      }

      .bookInfo:hover {
        background: #dddddd;
        cursor: pointer;

      }
    }
  }

</style>
