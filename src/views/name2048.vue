<template>
  <div>
    <div :style="{width:cssWidth}" id="head">
      <p class="head_screnum">分数：{{scoreNum}}</p>
      <button class="head_button" @click="newgame()">开始新游戏</button>
    </div>
    <div id="game" :style="{width:cssWidth,height:cssHeight}">
      <div v-for="(item,index) in board" :key="index+4">
        <span
          class="default-cell"
          v-for="(item2,index2) in item"
          :key="index2"
          :id="`defaul_${index}_${index2}`"
          :ref="`refs1_${index}_${index2}`"
          :style="{width:CELL_SIZE+'px',height:CELL_SIZE+'px'}"
        ></span>
      </div>

      <div v-for="(item3,index3) in board" :key="index3">
        <span
          class="cell"
          v-for="(item4,index4) in item3"
          :key="index4"
          :id="`cell_${index3}_${index4}`"
          :ref="`refs2_${index3}_${index4}`"
        >{{item4?item4:''}}</span>
      </div>
    </div>
    <is-Warning :boStop="boStop" @isStart="isStart"></is-Warning>
  </div>
</template>

<script>
import isWarning from '../components/warning'

export default {
  data() {
    return {
      //横竖方块的个数
      WIDTH: 4,
      HEIGHT: 4,
      //方块大小
      CELL_SIZE: 100,
      //间距
      MARGIN: 0,
      //移动动画时间
      Mover_ANIMATION_TIME: 200,
      board: [],
      //分数
      scoreNum: 0,
      //结束游戏的状态
      boStop: false,
      //数字背景颜色
      color: {
        2: "#eee4da",
        4: "#ede0c8",
        8: "#f2b179",
        16: "#f59563",
        32: "#f67c5f",
        64: "#f65e3b",
        128: "#edcf72",
        256: "#edcc61",
        512: "#0444BF",
        1024: "#A79674",
        2048: "#282726",
        4096: "#280b21",
        8192: "#281d04"
      }
    }
  },
  components: {
    isWarning
  },
  computed: {
    cssWidth() {
      return (this.WIDTH * (this.CELL_SIZE + this.MARGIN) + this.MARGIN) + "px";
    },
    cssHeight() {
      return (this.HEIGHT * (this.CELL_SIZE + this.MARGIN) + this.MARGIN) + "px";
    },

  },
  mounted() {
    let _this = this;
 
      _this.newgame();
   


    document.onkeydown = function (e) {
      switch (e.key.toLocaleUpperCase()) {
        case 'D':
        case 'ARROWRIGHT':
          _this.moveRight();
          break;
        case 'S':
        case 'ARROWDOWN':
          _this.moveDown();
          break;
        case 'A':
        case 'ARROWLEFT':
          _this.moveLeft();
          break;
        case 'W':
        case 'ARROWUP':
          _this.moveUp();
          break;
      }
      //判断游戏是否结束
      if (!(_this.isMoveRight() || _this.isMoveLeft() || _this.isMoveDown() || _this.isMoveUp())) {
        _this.boStop = true;
      }
    }
  },
  methods: {

    isStart() {
      this.boStop = false;
      this.newgame();
    },

    newgame() {
      this.init();
      //生成两个随机数
      this.createOneNumber();
      this.createOneNumber();
      //更新游戏视图
      this.updteGameView();


    },

    //更新游戏视图
    updteGameView() {

      for (let i = 0; i < this.HEIGHT; i++) {
        for (let j = 0; j < this.WIDTH; j++) {

          if (this.board[i][j] == 0) {
            setTimeout(() => {
              this.$refs[`refs2_${i}_${j}`][0].style.width = "0px";
              this.$refs[`refs2_${i}_${j}`][0].style.height = "0px";
              this.$refs[`refs2_${i}_${j}`][0].style.top = (this.getPosTop(i, j) + this.CELL_SIZE / 2) + "px";
              this.$refs[`refs2_${i}_${j}`][0].style.left = (this.getPosLeft(i, j) + this.CELL_SIZE / 2) + "px";
            }, 0)
          } else {
            setTimeout(() => {
              // console.log(this.board)
              this.$refs[`refs2_${i}_${j}`][0].style.width = this.CELL_SIZE + "px";
              this.$refs[`refs2_${i}_${j}`][0].style.height = this.CELL_SIZE + "px";
              this.$refs[`refs2_${i}_${j}`][0].style.top = this.getPosTop(i, j) + "px";
              this.$refs[`refs2_${i}_${j}`][0].style.left = this.getPosLeft(i, j) + "px";
              this.$refs[`refs2_${i}_${j}`][0].style.fontSize = (this.CELL_SIZE / 2.5) + "px";
              this.$refs[`refs2_${i}_${j}`][0].style.lineHeight = this.CELL_SIZE + "px";
              this.$refs[`refs2_${i}_${j}`][0].style.backgroundColor = this.color[this.board[i][j]];
              this.$refs[`refs2_${i}_${j}`][0].text = this.board[i][j];
            }, 0)
          }
        }
      }
      //强制刷新
      this.$forceUpdate()
    },
    init() {

      this.MARGIN = Math.floor(this.CELL_SIZE / 10);
      for (let i = 0; i < this.HEIGHT; i++) {
        //二维数组
        this.board[i] = new Array();
        for (let j = 0; j < this.WIDTH; j++) {
          this.board[i][j] = 0;
          setTimeout(() => {
            this.$refs[`refs1_${i}_${j}`][0].style.top = this.getPosTop(i, j) + "px";
            this.$refs[`refs1_${i}_${j}`][0].style.left = this.getPosLeft(i, j) + "px";
          }, 0)
        }
      }
      this.scoreNum = 0;
    },
    //获取方格到上方的距离
    // eslint-disable-next-line no-unused-vars
    getPosTop(i, j) {
      return i * (this.CELL_SIZE + this.MARGIN) + this.MARGIN;
    },
    //获取方格到左边的距离
    getPosLeft(i, j) {
      return j * (this.CELL_SIZE + this.MARGIN) + this.MARGIN;
    },
    //生成一个随机数字
    createOneNumber() {
      let i, j;
      // eslint-disable-next-line no-constant-condition
      while (true) {
        i = Math.floor(Math.random() * this.HEIGHT);
        j = Math.floor(Math.random() * this.WIDTH);
        //如果此处是零
        if (this.board[i][j] == 0) {
          this.board[i][j] = Math.random() < 0.9 ? 2 : 4;

          setTimeout(() => {
            // console.log(this.color[this.board[i][j]])
            this.$refs[`refs2_${i}_${j}`][0].style.backgroundColor = this.color[this.board[i][j]];
            this.$refs[`refs2_${i}_${j}`][0].text = this.board[i][j];
            this.$refs[`refs2_${i}_${j}`][0].style.fontSize = (this.CELL_SIZE / 2.5) + "px";
            this.$refs[`refs2_${i}_${j}`][0].style.lineHeight = this.CELL_SIZE + "px";
            this.$refs[`refs2_${i}_${j}`][0].style.animate = {
              width: this.CELL_SIZE + "px",
              height: this.CELL_SIZE + "px",
              top: this.getPosTop(i, j) + "px",
              left: this.getPosLeft(i, j) + "px",
              text: this.board[i][j]
            };
          }, 0)
          break;
        }
      }
    },

    add() {
      //生成一个随机数
      setTimeout(this.createOneNumber(), this.Mover_ANIMATION_TIME);
      //重新渲染页面
      setTimeout(this.updteGameView(), this.Mover_ANIMATION_TIME);
    },
    //判断是否向上移动
    isMoveUp() {
      for (let i = 1; i < this.HEIGHT; i++) {
        for (let j = 0; j < this.WIDTH; j++) {
          //判断上一格是否与当前格相等或上一格为零
          if (this.board[i][j] != 0) {
            if (this.board[i - 1][j] == 0 || this.board[i][j] == this.board[i - 1][j]) {
              return true;
            }
          }
        }
      }
      return false;
    },
    //向上移动
    moveUp() {
      if (this.isMoveUp()) {
        for (let i = 1; i < this.HEIGHT; i++) {
          for (let j = 0; j < this.WIDTH; j++) {
            //遍历当前格子的上方
            if (this.board[i][j] != 0) {
              for (let k = 0; k < i; k++) {
                //如果为零，并且k到i没有数字，移动
                if (this.board[k][j] == 0 && this.onBlockBeteweenRow(j, k, i)) {
                  this.board[k][j] = this.board[i][j];
                  this.board[i][j] = 0;
                  this.cellMoveAnimation(i, j, k, i);
                } else if (this.board[k][j] == this.board[i][j] && this.onBlockBeteweenRow(j, k, i)) {
                  this.board[k][j] = this.board[i][j] * 2;
                  this.board[i][j] = 0;
                  this.cellMoveAnimation(i, j, k, i);

                  this.scoreNum += this.board[k][j];
                }
              }
            }
          }
        }
        this.add();
      }
    },
    //判断是否可以向下移动
    isMoveDown() {
      //遍历上三横
      for (let i = this.HEIGHT - 2; i >= 0; i--) {
        for (let j = 0; j < this.WIDTH; j++) {
          //如果当前方块不为零
          if (this.board[i][j] != 0) {
            //判断下方是否为零或者当前方块相等
            if (this.board[i + 1][j] == 0 || this.board[i + 1][j] == this.board[i][j]) {
              return true;
            }
          }
        }
      }
      return false;
    },
    //向下移动
    moveDown() {
      if (this.isMoveDown()) {
        for (let i = this.HEIGHT - 2; i >= 0; i--) {
          for (let j = 0; j < this.WIDTH; j++) {
            //如果当前方块不为零
            if (this.board[i][j] != 0) {
              for (let k = this.HEIGHT - 1; k > i; k--) {
                //判断下方是否为零或者当前方块相等
                if (this.board[k][j] == 0 && this.onBlockBeteweenRow(j, i, k)) {
                  this.board[k][j] = this.board[i][j];
                  this.board[i][j] = 0;
                  this.cellMoveAnimation(i, j, k, j);
                } else if (this.board[k][j] == this.board[i][j] && this.onBlockBeteweenRow(j, i, k)) {
                  this.board[k][j] = this.board[i][j] * 2;
                  this.board[i][j] = 0;
                  this.cellMoveAnimation(i, j, k, j);

                  this.scoreNum += this.board[k][j];
                }
              }
            }
          }
        }
        this.add()
      }
    },

    //判断第col列和第row1行到row2行是否有数字
    onBlockBeteweenRow(col, row1, row2) {
      for (let i = row1 + 1; i < row2; i++) {
        if (this.board[i][col] != 0) return false;
      }
      return true;
    },
    //判断是否可以向右移动
    isMoveRight() {
      for (let i = 0; i < this.HEIGHT; i++) {
        for (let j = this.WIDTH - 2; j >= 0; j--) {
          //如果不等于零，判断左方向是否是零或是否相等
          if (this.board[i][j] != 0) {
            if (this.board[i][j + 1] == 0 || this.board[i][j + 1] == this.board[i][j]) {
              return true;
            }
          }
        }
      }
      return false;
    },
    //向右移动
    moveRight() {

      if (this.isMoveRight()) {
        for (let i = 0; i < this.HEIGHT; i++) {
          for (let j = this.WIDTH - 2; j >= 0; j--) {
            //如果不等于零，判断右方是否是零或者是否相等
            if (this.board[i][j] != 0) {
              for (let k = this.WIDTH - 1; k > j; k--) {
                //如果k到j之间没有数字且k与j相等
                if (this.board[i][k] == this.board[i][j] && this.noBloakBetweeRow(i, j, k)) {
                  //移动
                  this.board[i][k] = this.board[i][j] * 2;
                  this.board[i][j] = 0;
                  this.cellMoveAnimation(i, j, i, k);

                  this.scoreNum += this.board[i][k];

                } else if (this.board[i][k] == 0 && this.noBloakBetweeRow(i, j, k)) {
                  this.board[i][k] = this.board[i][j];
                  this.board[i][j] = 0;
                  this.cellMoveAnimation(i, j, i, k);

                }
              }
            }
          }
        }
        this.add();
      }

    },
    //判断是否可以向左移动
    isMoveLeft() {
      for (let i = 0; i < this.HEIGHT; i++) {
        for (let j = 1; j < this.WIDTH; j++) {
          //如果不等于零，判断左方向是否是零或是否相等
          if (this.board[i][j] != 0) {
            if (this.board[i][j - 1] == 0 || this.board[i][j - 1] == this.board[i][j]) {
              return true;
            }

          }
        }
      }
      return false;
    },
    //向左移动
    moveLeft() {

      if (this.isMoveLeft()) {
        for (let i = 0; i < this.HEIGHT; i++) {
          for (let j = 1; j < this.WIDTH; j++) {
            //如果不等于零，判断左方是否是零或者是否相等
            if (this.board[i][j] != 0) {
              for (let k = 0; k < j; k++) {
                //如果k到j之间没有数字且k与j相等
                if (this.board[i][j] == this.board[i][k] && this.noBloakBetweeRow(i, k, j)) {
                  //移动
                  this.board[i][k] = this.board[i][j] * 2;
                  this.board[i][j] = 0;
                  this.cellMoveAnimation(i, j, i, k);

                  this.scoreNum += this.board[i][k]

                } else if (this.board[i][k] == 0 && this.noBloakBetweeRow(i, k, j)) {
                  this.board[i][k] = this.board[i][j];
                  this.board[i][j] = 0;
                  this.cellMoveAnimation(i, j, i, k);
                }
              }
            }
          }
        }
        this.add();
      }
    },
    //移动方块动画
    cellMoveAnimation(i, j, toi, toj) {

      this.$refs[`refs2_${i}_${j}`][0].style.animate = ({
        top: this.getPosTop(toi, toj) + "px",
        left: this.getPosLeft(toi, toj) + "px",
      }, 50)
      // console.log(this.$refs[`refs2_${i}_${j}`], toi, toj)


    },
    //判断第row行的第col1列到第col2列之间有没有数字
    noBloakBetweeRow(row, col1, col2) {
      for (let i = col1 + 1; i < col2; i++) {
        if (this.board[row][i] != 0) return false
      }
      return true;
    },
    isFull() {
      return this.board.filter(e => e).length > 15;
    },


  }

}
</script>

<style lang='scss' scoped>
#head {
  margin: 0 auto;
  height: 120px;
  // border: 1px solid;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .head_screnum {
    font-size: 20px;
    font-weight: bold;
    width: 200px;
  }
  .head_button {
    width: 120px;
    height: 40px;

    color: white;

    border: none;
    border-radius: 8px;
    background: #c66f35;
    outline: none;
  }
  .head_button:hover {
    background: #874521;
  }
}
#game {
  position: relative;
  border-radius: 10px;
  background-color: #eddd9e;
  margin: 0 auto;
}
.default-cell {
  position: absolute;
  border-radius: 10px;
  background-color: #fef4b4;
}
.cell {
  position: absolute;
  border-radius: 10px;
  text-align: center;
}
</style>