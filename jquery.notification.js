(function($) {
	var obj = {
			icon: '',
			title: '提示',
			desc: ''
	};
	jQuery.fn.extend({
		notificationShow: function(){
			this.show();
		},
		notificationHide: function(){
			this.hide();
			this.empty();
		},
		notification : function(o) {
			o = $.extend(obj,o);
			if(this) {
				var group = '<div class="notification_group"><h2 class="notification_title">'+ o.title +'</h2>'+
							'<div class="desc">'+ o.desc +'</div></div>';
				var close = '<div class="notification_close" style="position:absolute;top:10px;right:10px;color:#bfcbd9;line-height:1;cursor:pointer;"><i class="iconfont" style="font-size:24px;">&#xe600;</i></div>';
				var icon = '';
				if(o.icon) {
					if(o.icon === 'success')
						icon = '<div class="icon_wrap"><i class="iconfont" style="color:#13ce66;">&#xe642;</i></div>';
					else if(o.icon === 'warning')
						icon = '<div class="icon_wrap"><i class="iconfont" style="color:#f7ba2a;">&#xe6d4;</i></div>';
					else if(o.icon === 'error')
						icon = '<div class="icon_wrap"><i class="iconfont" style="color:#ff4949;">&#xe641;</i></div>';
				}
				
				// 样式
				this.css({
					//'display': 'none',
					'position': 'fixed',
					'right': '16px',
					'bottom': '50px',
					'padding': '20px',
					'z-index': '1002',
					'width': '330px',
					'boxSize': 'border-box',
					'borderRadius': '2px',
					'backgroundColor': '#fff',
					'boxShadow': '0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04)',
					'transition': 'all .3s',
					'overflow': 'hidden'
				});
				
				this.addClass('clear');
				this.empty().append(icon+group+close);
				var _this = this;
				
				// 自动消失
				setTimeout(function(){
					_this.notificationHide();
				},2500);
				
				// 手动关闭
				$('.notification_close').click(function(){
					_this.notificationHide();
				});
				
				$('.icon_wrap').css({
					'float': 'left',
					'lineHeight': 1,
					'position': 'relative',
					'top': '5px'
				});
				
				$('.icon_wrap .iconfont').css({
					'font-size': '40px',
					
				});
				
				$('.notification_group').css({
					'marginLeft': '50px'
				});
				
				$('.notification_group .notification_title').css({
					'margin': '0',
					'fontSize' : '18px',
					'color': '#000'
				});
				$('.notification_group .desc').css({
					'margin': '0',
					'color' : '#8391a5'
				});
			}
		}
	});
})(jQuery);