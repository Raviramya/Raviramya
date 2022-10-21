var ctx = document.getElementById('global-rotation').getContext('2d'),
    planetsData = [
      
      {
        name: 'Venus',
        orbitalDistance: 50,
        size: 6,
        speed: .00350,
        colors: ['#BA8B02', '#181818']
      },
      {
        name: 'Mars',
        orbitalDistance: 90,
        size: 2.6,
        speed: 0.00241,
        colors: ['#EB5757', '#CB7D36'],
        moonsData: [{
          name: 'Phobos',
          orbitalDistance: 10,
          size: .3,
          speed: 0.02138,
          colors: ['#8B8179', '#B5B2B6']
        },
        {
          name: 'Deimos',
          orbitalDistance: 6,
          size: 0,
          speed: 0.0135,
          colors: ['#F1EEDB', '#CDAE89']
        }],
        moonsArr: []
      },
      {
        name: 'Jupiter',
        orbitalDistance: 116,
        size: 15,
        speed: .00400,
        colors: ['green', 'green']
      },
      {
        name: 'Neptune',
        orbitalDistance:170,
        size: 12,
        speed: .00479,
        colors: ['#344BB2', 'yellow']
      },
      {
        name: 'Uranus',
        orbitalDistance: 200,
        size: 12,
        speed: .00500,
        colors: ['pink', 'red']
      }
    ],
    planetsArr = [],
    time = new Date();
      

function orbit(orbitalDistance) {
  ctx.beginPath();
  ctx.arc(600, 600, orbitalDistance, 0, Math.PI * 2, false);
  // ctx.stroke();
}

function rings(rings, size) {
  ctx.save();
  ctx.scale(1, 0.2);
  rings.forEach((ringColor, index) => {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = ringColor;
    ctx.arc(0, 0, size + 3 * (index + 1), 0, Math.PI, true);
    ctx.stroke();
  })
  ctx.restore();
}

function planet(planet) {
  this.name = planet.name;
  this.orbitalDistance = planet.orbitalDistance;
  this.size = planet.size;
  this.speed = planet.speed;
  this.theta = 2 * Math.PI * Math.random();
  this.linGrad = ctx.createLinearGradient(-this.size/2, -this.size/2, this.size/2, this.size/2);
  this.gradVal = 0;
  planet.colors.forEach((color) => {
    this.linGrad.addColorStop(this.gradVal, color);
    this.gradVal = 0;
  })
  planet.moonsArr && (this.moonsArr = planet.moonsArr);
  planet.rings && (this.rings = planet.rings)
  this.rotate = () => {
    ctx.save()
    ctx.rotate(this.theta);
    this.theta = this.theta + this.speed; 
    ctx.translate(this.orbitalDistance, 0);
    ctx.beginPath();
    ctx.fillStyle = this.linGrad;
    ctx.arc(0, 0, this.size, 0, 2*Math.PI, true);
    ctx.fill();
    this.moonsArr && this.moonsArr.forEach((moon) => {
        moon.rotate();
      });
    this.rings && rings(this.rings, this.size);
    ctx.restore();
  }
}

function planets() {
  planetsData.forEach((plnt, index) => {
    if (plnt.moonsData) {
      plnt.moonsData.forEach((moon, index) => {
        plnt.moonsArr[index] = new planet(moon)
      })
    }
    planetsArr[index] = new planet(plnt);
  })
}
planets();

function draw() {
  time = new Date();
  ctx.clearRect(0, 0, 600, 600);
  ctx.save();
  // ctx.scale(1, 0.4);
  // ctx.translate(0, 400);
  // Sun
  // ctx.save();
  // ctx.beginPath();
  // sunLingrad = ctx.createLinearGradient(287.5, 287.5, 312.5, 312.5);
  // sunLingrad.addColorStop(0, '#f12711');
  // sunLingrad.addColorStop(1, '#f5af19');
  // ctx.shadowBlur = 20;
  // ctx.shadowColor = "#f5af19";
  // ctx.fillStyle = sunLingrad;
  // ctx.arc(300, 300, 25, 0, 2*Math.PI, false);
  // ctx.fill();
  // ctx.restore();
  // Orbits
  ctx.shadowColor = "transparent";
  ctx.strokeStyle = '#c2c2c2';
  ctx.lineWidth = 1/4;
  planetsData.forEach((planet) => {
    orbit(planet.orbitalDistance)
  });
  ctx.save();
  // Planets
  ctx.translate(300, 300);
  planetsArr.forEach((plnt) => {
    plnt.rotate();
  });
  ctx.restore();

  ctx.restore();
  requestAnimationFrame(draw);
}
requestAnimationFrame(draw);