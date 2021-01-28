<template>
  <div>
    <div id="layout">
      <button>开始</button>
      <input type="checkbox" />
      <svg>
        <circle
          class="circle"
          fill="none"
          stroke="#68e534"
          stroke-width="20"
          cx="200"
          cy="200"
          r="190"
          stroke-linecap="round"
          transform="rotate(-90,200,200)"
        />
        <polyline
          class="tick"
          fill="none"
          stroke="#68E534"
          stroke-width="24"
          points="88,214 173,284 304,138"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <h2>Success</h2>
    </div>
    <div>
      <div id="photo_box">
        <img src="../assets/image/image1.jpg" alt />
        <img src="../assets/image/image2.jpg" alt />
        <img src="../assets/image/image3.jpg" alt />
        <img src="../assets/image/image4.jpg" alt />
        <img src="../assets/image/image6.jpg" alt />
        <img src="../assets/image/image5.jpg" alt />
        <img src="../assets/image/image8.jpg" alt />
        <img src="../assets/image/image7.jpg" alt />
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

  },
  methods: {

  }

}
</script>

<style lang="scss" scoped>
#layout {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  flex-direction: column;
}

svg {
  width: 400px;
  height: 400px;
}
input[type="checkbox"]:checked ~ h2 {
  animation: 0.6s title ease-in-out;
  animation-delay: 1.2s;
  animation-fill-mode: forwards;
}

.circle {
  stroke-dasharray: 1194;
  stroke-dashoffset: 1194;
}
@keyframes circle {
  from {
    stroke-dashoffset: 1194;
  }
  to {
    stroke-dashoffset: 2388;
  }
}
input[type="checkbox"]:checked + svg .circle {
  animation: circle 1s ease-in-out;
  animation-fill-mode: forwards;
}

.tick {
  stroke-dasharray: 350;
  stroke-dashoffset: 350;
}

@keyframes tick {
  from {
    stroke-dashoffset: 350;
  }
  to {
    stroke-dashoffset: 0;
  }
}

input[type="checkbox"]:checked + svg .tick {
  animation: tick 0.8s ease-in-out;
  animation-fill-mode: forwards;
  animation-delay: 0.95s;
}

@keyframes title {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

#photo_box {
  width: 280px;
  height: 400px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: 200px auto;
  transform-style: preserve-3d;
  transform: rotate(0deg) rotate(0deg);
  animation: run 30s linear infinite;
}
#photo_box img {
  width: 250px;
  height: 350px;
  border: 5px solid #ccc;
  position: absolute;
  left: 0;
  top: 0;
}
#photo_box:hover {
  animation-play-state: paused;
}

/*依次设置图像盒子中每个图像旋转后位置*/

#photo_box img:nth-child(1) {
  transform: rotateY(45deg) translateZ(500px);
}
#photo_box img:nth-child(2) {
  transform: rotateY(90deg) translateZ(500px);
}
#photo_box img:nth-child(3) {
  transform: rotateY(135deg) translateZ(500px);
}
#photo_box img:nth-child(4) {
  transform: rotateY(180deg) translateZ(500px);
}
#photo_box img:nth-child(5) {
  transform: rotateY(225deg) translateZ(500px);
}
#photo_box img:nth-child(6) {
  transform: rotateY(270deg) translateZ(500px);
}
#photo_box img:nth-child(7) {
  transform: rotateY(315deg) translateZ(500px);
}
#photo_box img:nth-child(8) {
  transform: rotateY(360deg) translateZ(500px);
}
// #photo_box img:nth-child(9) {
//   transform: rotateY(288deg) translateZ(500px);
// }
// #photo_box img:nth-child(10) {
//   transform: rotateY(324deg) translateZ(500px);
// }
// #photo_box img:nth-child(11) {
//   transform: rotateY(360deg) translateZ(500px);
// }
@keyframes run {
  0% {
    transform: rotateX(0deg) rotateY(0deg);
  }
  25% {
    transform: rotateX(10deg) rotateY(90deg);
  }
  50% {
    transform: rotateX(0deg) rotateY(180deg);
  }
  75% {
    transform: rotateX(-10deg) rotateY(270deg);
  }
  100% {
    transform: rotateX(0deg) rotateY(360deg);
  }
}
</style>