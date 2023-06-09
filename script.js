require(['esri/config', 'esri/Map', 'esri/views/MapView', 'esri/Graphic', 'esri/layers/GraphicsLayer'], function (
	esriConfig,
	Map,
	MapView,
	Graphic,
	GraphicsLayer
) {
	const map = new Map({
		basemap: 'topo-vector',
	});
	const view = new MapView({
		container: 'viewDiv',
		map: map,
		zoom: 8.5,
		center: [106.10183715820308, 10.583671721437], 
	});

	const graphicsLayer = new GraphicsLayer();

	const withProvince = (data) => {
		return new Graphic({
			geometry: { type: 'polygon', rings: data.rings },
			symbol: { type: 'simple-fill', color: data.color },
			attributes: data,
			popupTemplate: {
				title: '{title}.',
				content: '<a>Dân số: {population} người. <br> Diện tích: {area} km².</a>',
			},
		});
	};

	const withUniversity = (data) => {
		return new Graphic({
			symbol: { type: 'picture-marker', url: universityImg, width: '24px', height: '24px' },
			geometry: { type: 'point', ...data },
			attributes: data,
			popupTemplate: {
				title: "{title}.",
				content: '<p>Địa chỉ: {address}.</p>',
			},
		});
	};

	const withWay = (data) => {
		return new Graphic({
			symbol: { type: 'simple-line', color: data.color, width: 3 },
			attributes: { description: data.description },
			popupTemplate: { title: '{description}.' },
			geometry: { type: 'polyline', paths: data.paths },
		});
	};

	const withCity = (data) => {
		return new Graphic({
			symbol: {
				type: "picture-marker",
				url: cityImg,
				width: "24px",
				height: "24px",
			},
			geometry: { type: "point", ...data },
			attributes: data,
			popupTemplate: {
				title: "{title}.",
			},
		});
	};
	// Province
	graphicsLayer.add(withProvince(ca_mau));
	graphicsLayer.add(withProvince(bac_lieu));
	graphicsLayer.add(withProvince(kien_giang));
	graphicsLayer.add(withProvince(an_giang));
	graphicsLayer.add(withProvince(can_tho));
	graphicsLayer.add(withProvince(hau_giang));
	graphicsLayer.add(withProvince(dong_thap));
	graphicsLayer.add(withProvince(vinh_long));
	graphicsLayer.add(withProvince(long_an));
	graphicsLayer.add(withProvince(tay_ninh));
	graphicsLayer.add(withProvince(binh_duong));
	graphicsLayer.add(withProvince(ho_chi_minh));
	graphicsLayer.add(withProvince(dong_nai));
	graphicsLayer.add(withProvince(binh_phuoc));
	graphicsLayer.add(withProvince(ben_tre));
	graphicsLayer.add(withProvince(tra_vinh));
	graphicsLayer.add(withProvince(tien_giang));
	graphicsLayer.add(withProvince(ba_ria));
	graphicsLayer.add(withProvince(soc_trang));

	//city
	graphicsLayer.add(withCity(rach_gia_city));
	graphicsLayer.add(withCity(bac_lieu_city));
	graphicsLayer.add(withCity(thu_dau_mot_binh_duong_city));
	graphicsLayer.add(withCity(di_an_binh_duong_city));
	graphicsLayer.add(withCity(thuan_an_binh_duong_city));
	graphicsLayer.add(withCity(tan_uyen_binh_duong_city));
	graphicsLayer.add(withCity(bien_hoa_dong_nai_city));
	graphicsLayer.add(withCity(long_khanh_dong_nai_city));
	graphicsLayer.add(withCity(vi_thanh_city));
	graphicsLayer.add(withCity(nga_bay_city));
	graphicsLayer.add(withCity(dong_xoai_city));
	graphicsLayer.add(withCity(can_tho_city));
	graphicsLayer.add(withCity(long_xuyen_city));
	graphicsLayer.add(withCity(chau_doc_city));
	graphicsLayer.add(withCity(cao_lanh_city));
	graphicsLayer.add(withCity(sa_dec_city));
	graphicsLayer.add(withCity(hong_ngu_city));
	graphicsLayer.add(withCity(soc_trang_city));
	graphicsLayer.add(withCity(tan_an_city));
	graphicsLayer.add(withCity(my_tho_city));
	graphicsLayer.add(withCity(vinh_long_city));
	graphicsLayer.add(withCity(ben_tre_city));
	graphicsLayer.add(withCity(tra_vinh_city));
	graphicsLayer.add(withCity(ca_mau_city));
	graphicsLayer.add(withCity(thu_duc_city));
	graphicsLayer.add(withCity(baria_vungtau_city));

	// Universities
	graphicsLayer.add(withUniversity(uit));
	graphicsLayer.add(withUniversity(ftu));
	graphicsLayer.add(withUniversity(ba_ria_vung_tau_university));
	graphicsLayer.add(withUniversity(dau_khi_viet_nam_university));
	graphicsLayer.add(withUniversity(tien_giang_cs1_university));
	graphicsLayer.add(withUniversity(kien_giang_university));
	graphicsLayer.add(withUniversity(bac_lieu_university));
	graphicsLayer.add(withUniversity(kinh_te_cong_nghiep_long_an_university));
	graphicsLayer.add(withUniversity(tan_tao_long_an_university));
	graphicsLayer.add(withUniversity(binh_duong_university));
	graphicsLayer.add(withUniversity(kinh_te_ky_thuat_binh_duong_university));
	graphicsLayer.add(withUniversity(quoc_te_mien_dong_university));
	graphicsLayer.add(withUniversity(thu_dau_mot_university));
	graphicsLayer.add(withUniversity(viet_duc_university));
	graphicsLayer.add(withUniversity(ngo_quyen_university));
	graphicsLayer.add(withUniversity(cong_nghe_dong_nai_university));
	graphicsLayer.add(withUniversity(lac_hong_university));
	graphicsLayer.add(withUniversity(cong_nghe_mien_dong_university));
	graphicsLayer.add(withUniversity(dong_nai_university));
	graphicsLayer.add(withUniversity(nguyen_hue_university));
	graphicsLayer.add(withUniversity(lam_nghiep_cs2_university));
	graphicsLayer.add(withUniversity(dong_thap_university));
	graphicsLayer.add(withUniversity(an_giang_university));
	graphicsLayer.add(withUniversity(can_tho_university));
	graphicsLayer.add(withUniversity(tra_vinh_university));
	graphicsLayer.add(withUniversity(tay_do_university));
	graphicsLayer.add(withUniversity(truong_dai_hoc_nam_can_tho));
	graphicsLayer.add(withUniversity(dai_hoc_y_duoc_can_tho));
	graphicsLayer.add(withUniversity(truong_dai_hoc_fpt_can_tho));
	graphicsLayer.add(withUniversity(greenwich_university));
	graphicsLayer.add(withUniversity(ky_thuat_cong_nghe_can_tho));
	graphicsLayer.add(withUniversity(cuu_long_uniersity));
	graphicsLayer.add(withUniversity(xay_dung_mien_tay_uniersity));
	graphicsLayer.add(withUniversity(su_pham_ki_thuat_vinh_long_uniersity));
	graphicsLayer.add(withUniversity(vo_truong_toan_uniersity));
	graphicsLayer.add(withUniversity(nguyentatthanh));
	graphicsLayer.add(withUniversity(tonducthang));
	graphicsLayer.add(withUniversity(mo));
	graphicsLayer.add(withUniversity(fpt));
	graphicsLayer.add(withUniversity(rmit));
	graphicsLayer.add(withUniversity(vanlangcschinh));
	graphicsLayer.add(withUniversity(vanlangcs1));
	graphicsLayer.add(withUniversity(vanlangcs2));
	graphicsLayer.add(withUniversity(congnghiep));
	graphicsLayer.add(withUniversity(kinhte));
	graphicsLayer.add(withUniversity(yduoc));
	graphicsLayer.add(withUniversity(luatcs1));
	graphicsLayer.add(withUniversity(luatcs2));
	graphicsLayer.add(withUniversity(supham));
	graphicsLayer.add(withUniversity(saigon));
	graphicsLayer.add(withUniversity(khtnq5));
	graphicsLayer.add(withUniversity(khtntd));
	graphicsLayer.add(withUniversity(pnt));
	graphicsLayer.add(withUniversity(cntp));
	graphicsLayer.add(withUniversity(csndq7));
	graphicsLayer.add(withUniversity(csndtd));
	graphicsLayer.add(withUniversity(khxhnvhcm));
	graphicsLayer.add(withUniversity(khxhnvtd));
	graphicsLayer.add(withUniversity(kientruc));
	graphicsLayer.add(withUniversity(hocvienhangkhong));
	graphicsLayer.add(withUniversity(bkcs1));
	graphicsLayer.add(withUniversity(bkcs2));
	graphicsLayer.add(withUniversity(nhacvienhcm));
	graphicsLayer.add(withUniversity(gtvthcm));
	graphicsLayer.add(withUniversity(phgtvt));
	graphicsLayer.add(withUniversity(hutechhcm));
	graphicsLayer.add(withUniversity(hutechtd));
	graphicsLayer.add(withUniversity(kinhtetaichinh));
	graphicsLayer.add(withUniversity(hoasen));
	graphicsLayer.add(withUniversity(mythuat));
	graphicsLayer.add(withUniversity(hongbang));
	graphicsLayer.add(withUniversity(spktcs1));
	graphicsLayer.add(withUniversity(spktcs2));
	graphicsLayer.add(withUniversity(nganhang));
	graphicsLayer.add(withUniversity(nonglam));
	graphicsLayer.add(withUniversity(ktluat));
	graphicsLayer.add(withUniversity(tdtt));
	graphicsLayer.add(withUniversity(quocte));
	graphicsLayer.add(withUniversity(anninhnd));
	graphicsLayer.add(withUniversity(phthuyloi));
	graphicsLayer.add(withUniversity(trandainghia));
	graphicsLayer.add(withUniversity(taichinhmarketing));
	graphicsLayer.add(withUniversity(tnmt));
	graphicsLayer.add(withUniversity(vanhoacs1));
	graphicsLayer.add(withUniversity(vanhoacs2));
	graphicsLayer.add(withUniversity(hungvuong));
	graphicsLayer.add(withUniversity(greenwich));
	graphicsLayer.add(withUniversity(vanhien));
	graphicsLayer.add(withUniversity(binh_duong_ca_mau_uniersity));
	graphicsLayer.add(withUniversity(ton_duc_thang_ca_mau_uniersity));

	// ways
	graphicsLayer.add(withWay(ql61));
	graphicsLayer.add(withWay(quan_lo_phung_hiep));
	graphicsLayer.add(withWay(ql56));
	graphicsLayer.add(withWay(tl328));
	graphicsLayer.add(withWay(tl748));
	graphicsLayer.add(withWay(ql53));
	graphicsLayer.add(withWay(ql30));
	graphicsLayer.add(withWay(ql54));
	graphicsLayer.add(withWay(qlN2));
	graphicsLayer.add(withWay(ql1A_1));
	graphicsLayer.add(withWay(ql62));
	graphicsLayer.add(withWay(ql60));
	graphicsLayer.add(withWay(ql61b));
	graphicsLayer.add(withWay(ql13));
	graphicsLayer.add(withWay(ql14));
	graphicsLayer.add(withWay(ql22));
	graphicsLayer.add(withWay(ql22B));
	graphicsLayer.add(withWay(ql50));
	graphicsLayer.add(withWay(ql51));
	graphicsLayer.add(withWay(ql55));
	graphicsLayer.add(withWay(ql1A));
	graphicsLayer.add(withWay(ql57));
	graphicsLayer.add(withWay(dt986b));
	graphicsLayer.add(withWay(ql91b));
	graphicsLayer.add(withWay(ql63));
	graphicsLayer.add(withWay(ql91));
	graphicsLayer.add(withWay(ql80));
	graphicsLayer.add(withWay(ql80_1));
	graphicsLayer.add(withWay(qln1));
	graphicsLayer.add(withWay(ql20));
	graphicsLayer.add(withWay(ql1K));
	graphicsLayer.add(withWay(ql91c));
	graphicsLayer.add(withWay(ql61b))

	map.add(graphicsLayer);
});
