define(['mui', 'util', 'picker'], (mui, util) => {
	var picker = null;
	var dtPicker = null;
	var data = document.querySelector('.setData');
	var time = document.querySelector('.setTimer');
	var sideslip = document.querySelector('.sideslip');

	/* 初始化 */
	function init() {
		/* 初始化mui */
		mui.init()
		/* 初始化mui区域滚动 */

		mScroll('.mui-scroll-wrapper')

		/* 初始化popPicker组件 */
		picker = new mui.PopPicker();

		/*初始化DtPicker组件 */
		dtPicker = new mui.DtPicker({
			type: 'month'
		});

		document.getElementsByClassName('mui-inner-wrap')[0].addEventListener('drag', function(event) {
			event.stopPropagation();
		});
		
	}
	/* 初始化mui区域滚动 */
	function mScroll(elName) {
		mui(elName).scroll({
			deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
		});
	}
	/* 事件 */
	function addEvent() {
		/* 点击年月 */
		data.addEventListener('tap', function() {

			picker.setData([{
					value: 'month',
					text: '月'
				},
				{
					value: 'year',
					text: '年'
				}
			]);
			picker.show(function(selectItems) {
				data.innerHTML = selectItems[0].text;
				console.log(selectItems[0].text); //月~年
				console.log(selectItems[0].value); //month ~year
			})
		})
		
		/* 点击日期 */
		time.addEventListener('tap', function() {
			dtPicker.show(function(selectItems) {
				console.log(selectItems.y); //{text: "2016",value: 2016} 
				console.log(selectItems.m); //{text: "05",value: "05"} 
			})
		})
		
		/* 阻止侧滑drag事件 */
		sideslip.addEventListener('tap', function() {
			mui('.mui-off-canvas-wrap').offCanvas('show');
			// mui('.mui-off-canvas-wrap').offCanvas().show();
		})
	}
	/* 删除 */
	function del() {
		mui('#OA_task_1').on('tap', '.mui-btn', function(event) {
			var elem = this;
			var li = elem.parentNode.parentNode;
			mui.confirm('确认删除该条记录？', 'Hello MUI', btnArray, function(e) {
				if (e.index == 0) {
					li.parentNode.removeChild(li);
				} else {
					setTimeout(function() {
						mui.swipeoutClose(li);
					}, 0);
				}
			});
		});
		var btnArray = ['确认', '取消'];

	}
	/* 调用 */
	init()
	addEvent()
	del()
})
