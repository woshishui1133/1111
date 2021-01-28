<template>
  <div class="tetris_wrapper" ref="test" @click="initializationGrid">
    <button @click="deathRule">测试</button>
    <div class="game_wrapper" ref="container">
      <div class="block-group" v-for="(item,index) in structureArray" :key="index">
        <div
          class="block"
          v-for="(block,blockIndex) in item"
          :key="blockIndex"
          :class="{green: block.state === 1, red: block.state === 2, blue: block.state === 3, black: block.state === 4}"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timer: null, //存储定时器
      interval: 200,//定时器间隔时间
      transverse: 20, //横坐标方格数量
      structureArray: [], //游戏布局结构数组
      moveDirection: 1, //蛇移动的方向
      nextMoveDirection: 1, // 将要移动的方向，0、1、2、3，上右下左
      snakeHead: {}, //蛇头坐标
      snakeTail: {},//蛇尾坐标
      foodCoordinate: {}//食物坐标
    }
  },
  computed: {
    longitudinal() {
      let boxWidth = this.$refs.container.clientWidth;
      let boxHeight = this.$refs.container.clientHeight;
      let longitudinal = parseInt((boxHeight / boxWidth) * this.transverse)
      return longitudinal
    }
  },
  async mounted() {

    let _this = this;

    await _this.initializationGrid();//初始化网格
    _this.inintalizationSnake();//初始化蛇
    _this.addKeybordEvents();//初始化键盘按下
    _this.initializationTimer();//初始化定时器
    _this.generateFood();//生成食物
  },
  methods: {
    //初始化网格
    initializationGrid() {
      this.structureArray = [];
      for (let i = 0; i < this.longitudinal; i++) {
        this.structureArray.push([]);
        for (let j = 0; j < this.transverse; j++) {
          this.structureArray[i].push({
            state: 0//0 为空，1蛇身，2蛇头，3蛇尾，4食物
          });
        }
      }

    },
    //初始化蛇
    inintalizationSnake() {
      this.structureArray[2].splice(4, 1, { state: 2, code: 2 });
      this.structureArray[2].splice(3, 1, { state: 1, code: 1 });
      this.structureArray[2].splice(2, 1, { state: 3, code: 0 });
      this.snakeHead = { x: 4, y: 2 }; //蛇头坐标
      this.snakeTail = { x: 2, y: 2 }; //蛇尾坐标
      console.log(this.structureArray)
    },
    //键盘按下移动
    addKeybordEvents() {
      document.onkeydown = (event) => {
        console.log(event.keyCode);
        switch (event.keyCode) {
          case 38:
            this.changgeMoveDirection(0);
            break;
          case 39:
            this.changgeMoveDirection(1);
            break;
          case 40:
            this.changgeMoveDirection(2);
            break;
          case 37:
            this.changgeMoveDirection(3);
            break;
        }
      }
    },
    //改变蛇的移动方向
    changgeMoveDirection(direction) {
      //判断非法的蛇头转向
      let judge = direction - this.moveDirection;
      if (judge === 2 || judge === -2) return;
      this.nextMoveDirection = direction;
    },
    //初始化定时器
    initializationTimer() {
      this.timer = setInterval(() => {
        //处理
        if (this.deathRule()) {//没死
          this.mobileRule();//移动
        } else {
          //死了
          this.deathTreatment();
        }
      }, this.interval);

    },
    //随机生成食物
    generateFood() {
      let x = Math.floor(Math.random() * this.transverse);
      let y = Math.floor(Math.random() * this.longitudinal);
      //是空位置
      if (this.structureArray[y][x].state === 0) {
        //新的食物坐标
        this.foodCoordinate = { x, y };
        // 修改坐标状态值,code无限大用来计算蛇尾时不会出错
        this.structureArray[y].splice(x, 1, { state: 4, code: Infinity });

      } else {
        //位置不为空，重新生成
        this.generateFood()
      }

    },
    //蛇移动规定
    mobileRule() {
      //当前蛇头的坐标
      let { x, y } = this.snakeHead;
      //获取当前蛇头的code，用来生成新蛇头是++使用
      let headCode = this.structureArray[y][x].code;
      this.structureArray[y][x].state = 1;
      //移动方向，计算移动后的横纵坐标
      switch (this.nextMoveDirection) {
        case 0:
          y--;
          break;
        case 1:
          x++;
          break;
        case 2:
          y++;
          break;
        case 3:
          x--;
          break;
        default:
          throw new Error('蛇的移动规定判断出错了');
          // eslint-disable-next-line no-unreachable
          break;
      }
      this.structureArray[y].splice(x, 1, { state: 2, code: ++headCode });
      this.snakeHead = { x, y };
      this.moveDirection = this.nextMoveDirection;
      //判断是否吃到食物（蛇头和食物坐标是否重合）
      this.whetherEatFood();
    },
    //是否吃到食物判断
    whetherEatFood() {
      //判断蛇头和食物坐标是否重合
      let state = JSON.stringify(this.snakeHead) === JSON.stringify(this.foodCoordinate)
      if (state) {
        //生成食物
        this.generateFood();
        //增加难度
        this.increaseDifficulty()
      } else {
        //重新生成蛇尾
        this.generateSnaKeTail();
      }
    },
    //增加游戏难度
    increaseDifficulty() {
      if (this.interval <= 100) return;
      this.interval -= 4;
      this.clearTimer();
      this.initializationTimer();
      console.log(this.interval)

    },
    generateSnaKeTail() {
      let { x, y } = this.snakeTail;
      if (this.structureArray[y][x].state != 2) this.structureArray[y].splice(x, 1, { state: 0 })
      let top = (y - 1 >= 0) && this.structureArray[y - 1][x].state ? this.structureArray[y - 1][x].code : Infinity;
      let bottom = (y + 1 < this.longitudinal) && this.structureArray[y + 1][x].state ? this.structureArray[y + 1][x].code : Infinity;
      let left = (x - 1 >= 0) && this.structureArray[y][x - 1].state ? this.structureArray[y][x - 1].code : Infinity;
      let right = (x + 1 < this.transverse) && this.structureArray[y][x + 1].state ? this.structureArray[y][x + 1].code : Infinity;
      let min = Math.min(top, bottom, left, right);
      switch (min) {
        case top:
          y--;
          break;
        case bottom:
          y++;
          break;
        case left:
          x--;
          break;
        case right:
          x++;
          break;
        default:
          console.log('重新生成蛇尾出错');
          break;
      }
      //保存蛇尾坐标
      this.snakeTail = { x, y };
      //将此坐标定义为蛇尾
      this.structureArray[y][x].state = 3;
    },
    //蛇的死亡规则判断
    deathRule() {
      //蛇头
      let { x, y } = this.snakeHead;
      switch (this.nextMoveDirection) {
        case 0:
          if (y - 1 < 0) return false;
          else if (this.structureArray[y - 1][x].state === 1) return false;
          break;
        case 1:
          if (x + 1 > this.transverse - 1) return false;
          else if (this.structureArray[y][x + 1].state === 1) return false;
          break;
        case 2:
          if (y + 1 > this.longitudinal - 1) return false;
          else if (this.structureArray[y + 1][x].state === 1) return false;
          break;
        case 3:
          if (x - 1 < 0) return false;
          else if (this.structureArray[y][x - 1].state === 1) return false;
          break;
        default:
          throw new Error('蛇的死亡规则判断错误')
          // eslint-disable-next-line no-unreachable
          break;
      }
      return true;
    },
    //
    deathTreatment() {
      this.clearTimer();
      alert('游戏结束')
    },
    //清除定时
    clearTimer() {
      clearInterval(this.timer);
    },
  }
}
</script>

<style lang='scss' scoped>
.tetris_wrapper {
  width: 100%;
  height: 100%;
}
.game_wrapper {
  margin: 40px auto;
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  background-color: aquamarine;
}
.block-group {
  flex: 1;
  position: relative;
  display: flex;
}
.block {
  flex: 1;
  border: 1px solid #000;
}
.green {
  background-color: green;
}
.red {
  background-color: red;
}
.blue {
  background-color: blue;
}
.black {
  background-color: black;
}
</style>