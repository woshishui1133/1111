<template>
  <div class="box">
    <div class="box_a"></div>
    <div style="border:1px solid;height:150px">
      <ul class="demo_ui">
        <li>
          <div>菜单</div>
          <ol>
            <li>肉菜</li>
            <li>蔬菜</li>
          </ol>
        </li>
        <li>
          <div>饮料</div>
          <ol>
            <li>可乐</li>
            <li>脉动</li>
          </ol>
        </li>
      </ul>
    </div>
    <div style="border:1px solid; height:150px;position:relative;">
      <div class="logo_box">
        <img src="../assets/image/image3.jpg" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  mounted() {
    let nums = '小明';
    let strings = '非常高兴认识你小明，不客气';

    console.log(strings.includes(nums));
    let Numbers = 124 / 3;
    //数字验证
    console.log(Number.isFinite(Numbers)); //true
    //判断整数
    console.log(Number.isInteger(Numbers)); //false

    let json = {
      '0': 'jsp',
      '1': '小明',
      '2': '西帕',
      length: 3
    }
    let arr = Array.from(json);
    console.log(arr);

    // let stt = '[1,2,3]';
    let arr1 = Array.of(12, 34, 6, 4, 64);
    console.log(arr1)
    for (let [item, index] of arr1.entries()) {
      console.log(item, index)

    }

    // eslint-disable-next-line no-unused-vars
    let dd = (a, b = 1) => {
      if (a == 0) {
        throw new Error('This is error');
      }
      return a + b;
    }
    console.log(dd(2));
    let json2 = {
      a: '123',
      b: 'abcd',
      c: '000'
    }
    function fun({ a, b = 'web' }) {
      console.log(a, b)
    }
    fun(json2)

  }

}
</script>

<style lang='scss' scoped>
.box {
  margin: 0;
  padding: 0;
}
.box_a {
  width: 100px;
  height: 100px;
  background-color: #fef3c9;
  transition: background-color, 0.5s, ease, 1s;
}
.box_a:hover {
  background-color: #2d5b93;
}

.demo_ui li {
  padding: 0 10px;
  width: 100px;
  background-color: #2d5b93;
  list-style: none;
  text-align: center;
  color: white;
  position: relative;
}
.demo_ui li div {
  height: 40px;
  line-height: 40px;
  text-align: center;
}
.demo_ui li ol {
  position: absolute;
  width: 100%;
  top: 40px;
  left: -40px;
  transform-origin: 0 0;
  transition: all 0.5s;
  transform: scaleY(0);
  overflow: hidden;
}
.demo_ui {
  display: flex;
}
.demo_ui li:hover ol {
  transform: scaleY(1);
}
.demo_ui li ol li {
  float: none;
  background-color: rgb(50, 45, 147);
}
.logo_box {
  position: absolute;
  top: 20px;
  left: 20px;
  animation: logo1 1s ease-in infinite;
}
.logo_box img {
  width: 20px;
  height: 20px;
  border-radius: 50px;
  animation: logo2 2s linear infinite;
}
@keyframes logo2 {
  0% {
    transform: translateX(0px);
  }
  25% {
    transform: translateX(50px);
  }
  50% {
    transform: translateX(100px);
  }
  75% {
    transform: translateX(150px);
  }
  100% {
    transform: translateX(200px);
  }
}

@keyframes logo1 {
  0% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-100px);
  }
  50% {
    transform: translateY(0x);
  }
  75% {
    transform: translateY(-50px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>