function getDaftarAbsensiFirhan(nim) {
	$.ajax({
		url: "absensi.online.php  ",
		type: "GET",
		data: {
			ABSENSI: {
				IN_NIM: nim,
				IN_IS_AKTIF: $("#is_aktif").val(),
			},
		},
		success: function (res) {
			var result = JSON.parse(res);
			console.log(result);
		},
	});
}
