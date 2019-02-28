define(function() {
	var getUid = function(fn) {
		var uid = localStorage.getItem('uid') || '';

		if (!uid) {
			mui.ajax('/users/api/adduser', {
				dataType: 'json',
				success: function(data) {
					console.log(data)
					if (data.code === 1) {
						localStorage.setItem('uid', data.data)
						fn(data.data)
					}
				}
			})
		} else {
			fn(uid)
		}
	}
	return getUid;
})
