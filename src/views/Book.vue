<template>
  <div class="book">
    <div id="main">
      <div class="card"></div>
      <div class="img">
        <button v-for="(item,index) in chapterInfo" :key="index" class="fluid ui button"
                :class="{'blue':item.id === chapterId}" style="margin: 10px;width: 430px" @click="toChapter(item)"><font
            style="vertical-align: inherit;"><font style="vertical-align: inherit;">{{ item.chapterName }}</font></font>
        </button>
      </div>
      <div class="article">
      </div>
      <div class="block"><span class="page">{{ page }}</span></div>

      <div class="para">
        <!--文本内容-->
        <!--        <div  v-for="item in 196" :key="item" style="width: 30px;height: 30px;border: 1px black solid;display: inline-flex">{{item}}</div>-->
        <div v-for="(item,index) in content" :key="index" style="width: 30px;height: 30px;display: inline-flex;
    position: relative;">
          <p>{{ item }}</p>
        </div>
        <!--        <p>{{ content }}</p>-->
      </div>

      <div class="ui indicating progress"
           style="position: absolute;bottom: 0;right: 205px;width: 230px;margin-bottom: 12px" id="example1"
           :data-value="page" :data-total="totalPage">
        <div class="bar">
          <div class="progress"></div>
        </div>
      </div>

      <div class="ui mini buttons" style="position: absolute;bottom: 10px;right: 20px;">
        <button class="ui  button" :disabled="page===1" @click="previous"><font
            style="vertical-align: inherit;"><font style="vertical-align: inherit;">上一页</font></font></button>
        <div class="or"></div>
        <button class="ui teal button" :disabled="page===totalPage" @click="next"><font
            style="vertical-align: inherit;"><font
            style="vertical-align: inherit;">下一页</font></font></button>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Book",
  data() {
    return {
      page: 1,
      content: "",
      chapterId: 1,
      totalPage: 1,
      chapterInfo: [],
      progress: 0
    }
  },
  created() {
    this.getChapterContent(1)
  },
  watch: {
    page: {
      handler(newVal) {
        // 当页码发生变化时，设置进度条的百分比
        console.log(newVal)
        $('#example1').progress({
          percent: (this.page/this.totalPage)*100
        });
      }
    }
  },
  mounted() {

  },
  methods: {
    getChapterContent(page) {
      var bookId = this.$route.query.bookId;
      this.$request.getChapterContent(bookId, page).then(value => {
        if (value.code === 200) {
          if (value.data.page !== -1) {
            this.chapterId = value.data.chapterId
            this.chapterInfo = value.data.chapterInfo
            this.content = value.data.content
            this.page = value.data.page
            this.totalPage = value.data.totalPage
          } else {
            this.$message.warning(value.data.content)
          }
        } else {
          this.$message.warning(value.status)

        }
      })
    },
    next() {
      if (this.page + 1 > this.totalPage) {
        return
      }
      this.getChapterContent(this.page + 1)
    },

    previous() {
      if (this.page - 1 < 1) {
        return
      }
      this.getChapterContent(this.page - 1)
    },
    toChapter(item) {
      this.$request.getChapterById(item.id, item.bookId).then(value => {
        if (value.code === 200) {
          if (value.data.page !== -1) {
            this.chapterId = value.data.chapterId
            this.chapterInfo = value.data.chapterInfo
            this.content = value.data.content
            this.page = value.data.page
          } else {
            this.$message.warning(value.data.content)
          }
        } else {
          this.$message.warning(value.status)
        }
      })
    }
  }
}
</script>

<style scoped>
#main {
  background: #CCB7B0 !important;
  /*overflow: hidden;*/
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-46%);
  z-index: 1;
  animation: fadeIn 4s ease-in;

}

.card {
  height: 90vh;
  width: 900px;


  background: #CCB7B0 !important;
}

.img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-100%) translateY(-50%);
  height: 100%;
  width: 450px;
  background-image: url(https://www.retrorenovation.com/wp-content/uploads/2014/09/retro-botanical-barkcloth22.jpg
  );
  background-size: contain;
  background-repeat: repeat;
}

.headline {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(100%) translateY(-150%);
  text-align: center;
  font-family: 'Playfair Display SC', serif;
}

.para {
  width: 430px;
  /*position: absolute;*/
  /*top: 50%;*/
  /*left: 50%;*/
  /*transform: translateX(4%) translateY(-80%);*/
  position: absolute;
  top: 10%;
  left: 52%;
  text-align: left;
  /*font-family: 'Playfair Display', serif;*/
  font-size: 20px;
}

#dot {
  position: absolute;
  height: 100px;
  width: 200px;
  top: 50%;
  left: 50%;
  transform: translateX(140%) translateY(200%);
  background-image: url(http://www.appladesign.net/domains/create/documents/dots_266.png);
  background-size: contain;
  background-repeat: repeat;
  z-index: 2;
}

#dot:before {
  content: "";
  position: absolute;
  height: 200px;
  width: 100px;
  top: 50%;
  left: 50%;
  transform: translateX(-850%) translateY(-280%);
  background-image: url(http://www.appladesign.net/domains/create/documents/dots_266.png);
  background-size: contain;
  background-repeat: repeat;
}

.article {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(35%) translateY(-510%);
  text-align: center;
  font-family: 'Playfair Display SC', serif;
}


.block {
  background: grey;
  opacity: .5;
  position: absolute;
  height: 5px;
  width: 40%;
  top: 5%;
  left: 53%;
}

.page {
  display: flex;
  justify-content: right;
  top: -40%;
  right: -8%;
  transform: translateX(5%) translateY(-30%);
  position: absolute;
}

/* .block:before {
  content: "";
  background: grey;
  opacity: .5;
  position: absolute;
  height: 5px;
  width: 80px;
  top: 500px;
  left: -145px;
} */
/* Keyframes */

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>