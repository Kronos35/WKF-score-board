new Vue({
	el: '#app',
	
	data:{
		ao: {
			name: 'Alvaro Alday',
			points: 0,
			c1: 0,
			c2: 0,
			C1:{
				w:false,
				k:false,
				hc:false,
				h:false
			},
			C2:{
				w:false,
				k:false,
				hc:false,
				h:false
			}
		},
		aka: {
			name: 'Ruben Gomez',
			points: 0,
			c1: 0,
			c2: 0,
			C1:{
				w:false,
				k:false,
				hc:false,
				h:false
			},
			C2:{
				w:false,
				k:false,
				hc:false,
				h:false
			}
		},
		division: 'Males -60kg',
		atoshi_baraku: false,
		minutes: 3,
		timer:{
			on: false,
			seconds: 0,
			minutes: 3,
			status: 'Pause'
		},
		placeholder:'0'
	},
	methods:{
		start_tiempo:function(){
			this.timer.on=!this.timer.on
			if (this.timer.on) {
				this.timer.status= '';
				if (this.timer.seconds<10) {
					this.placeholder='0';
				}else{
					this.placeholder='';
				}
				this.tiempo();
			}else{
				this.timer.status= 'Pause';
			}
		},
		tiempo: function()
		{
			if (this.timer.seconds<10) {
				this.placeholder='0';
			}
			if (this.timer.on) {
				this.timer.seconds-=1;
				if (this.timer.seconds<10) {
					this.placeholder='0';
				}else{
					this.placeholder='';
				}
				aux=setTimeout(this.tiempo, 1000);
			}
			
			if (this.timer.seconds<0){
				this.timer.minutes--;
				this.placeholder='';
				this.timer.seconds=59;
			}
			if ((this.ao.points-this.aka.points)>=8) {					
				swal(this.ao.name+" gana!");
				clearTimeout(aux);
				clear_board();
			}
			if ((this.aka.points-this.ao.points)>=8) {
				swal(this.ao.name+" gana!");
				clearTimeout(aux);
				clear_board();
			}
			if (this.timer.seconds==0&&this.timer.minutes==0){
				if (this.ao.points>this.aka.points) {					
					swal(this.ao.name+" gana!");
				}else if(this.ao.points<this.aka.points){
					swal(this.aka.name+" gana!");
				}else
				{
					swal("Empate, punto de oro");
				}
				clearTimeout(aux);
				crear_board();
			}
		},
		clear_board: function(){
			this.timer.seconds=0;
			this.placeholder='0';
			this.timer.minutes=3;
			this.aka.points=0;
			this.aka.c1=0;
			this.aka.c2=0;
			this.ao.points=0;
			this.ao.c1=0;
			this.ao.c2=0;
			this.timer.on=false;
		},
		chk_points: function(){
			if ((this.ao.points-this.aka.points)>=8) {					
				swal(this.ao.name+" gana!");
				clearTimeout(aux);
				clear_board();
			}
			if ((this.aka.points-this.ao.points)>=8) {
				swal(this.aka.name+" gana!");
				clearTimeout(aux);
				clear_board();
			}
		},
		aka_yuko: function() 
		{
			this.aka.points++;
			this.chk_points();
		},
		aka_wazaari: function() 
		{
			this.aka.points += 2;
			this.chk_points();
		},
		aka_ippon: function() 
		{
			this.aka.points += 3;
			this.chk_points();
		},
		ao_yuko: function()
		{
			this.ao.points++;
			this.chk_points();
		},
		ao_wazaari: function() 
		{
			this.ao.points += 2;
			this.chk_points();
		},
		ao_ippon: function() 
		{
			this.ao.points += 3;
			this.chk_points();
		},

		// Ao infractions
		// C1 Infractions
		ao_chukoku_c1:function(){
			this.ao.c1=1;
			this.ao.C1.w=(this.ao.C1.w) ? false : true;
		},
		ao_keikoku_c1:function(){
			this.ao.c1=2;
			this.ao.C1.k=(this.ao.C1.k) ? false : true;
		},
		ao_hansoku_chui_c1:function(){
			this.ao.c1=3;
			this.ao.C1.hc=(this.ao.C1.hc) ? false : true;
		},
		ao_hansoku_c1:function(){
			this.ao.c1=4;
			this.ao.C1.h=(this.ao.C1.h) ? false : true;
			swal(this.aka.name+" gana!");
			this.ao.C1.h=(this.ao.C1.h) ? false : true;
		},
		// C2 Infractions
		ao_chukoku_c2:function(){
			this.ao.c2=1;
			this.ao.C2.w=(this.ao.C2.w) ? false : true;
		},
		ao_keikoku_c2:function(){
			this.ao.c2=2;
			this.ao.C2.k=(this.ao.C2.k) ? false : true;
		},
		ao_hansoku_chui_c2:function(){
			this.ao.c2=3;
			this.ao.C2.hc=(this.ao.C2.hc) ? false : true;
		},
		ao_hansoku_c2:function(){
			this.ao.c2=4;
			this.ao.C2.h=(this.ao.C2.h) ? false : true;
			swal(this.aka.name+" gana!");
			this.ao.C2.h=(this.ao.C2.h) ? false : true;
		},

		// Aka infractions
		// C1 Infractions
		aka_chukoku_c1:function(){
			this.aka.c1=1;
			this.aka.C1.w=(this.aka.C1.w) ? false : true;
		},
		aka_keikoku_c1:function(){
			this.aka.c1=2;
			this.aka.C1.k=(this.aka.C1.k) ? false : true;
		},
		aka_hansoku_chui_c1:function(){
			this.aka.c1=3;
			this.aka.C1.hc=(this.aka.C1.hc) ? false : true;
		},
		aka_hansoku_c1:function(){
			this.aka.c1=4;
			this.aka.C1.h=(this.aka.C1.h) ? false : true;
			swal(this.ao.name+" gana!");
			this.aka.C1.h=(this.aka.C1.h) ? false : true;
		},
		// C2 Infractions
		aka_chukoku_c2:function(){
			this.aka.c2=1;
			this.aka.C2.w=(this.aka.C2.w) ? false : true;
		},
		aka_keikoku_c2:function(){
			this.aka.c2=2;
			this.aka.C2.k=(this.aka.C2.k) ? false : true;
		},
		aka_hansoku_chui_c2:function(){
			this.aka.c2=3;
			this.aka.C2.hc=(this.aka.C2.hc) ? false : true;
		},
		aka_hansoku_c2:function(){
			this.aka.c2=4;
			this.aka.C2.h=(this.aka.C2.h) ? false : true;
			swal(this.ao.name+" gana!");
			this.aka.C2.h=(this.aka.C2.h) ? false : true;
		},
	}
});