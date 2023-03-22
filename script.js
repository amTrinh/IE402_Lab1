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
		zoom: 8,
		// center: [15, 65] // longitude, latitude
		center: [106.10183715820308, 10.583671721437], // longitude, latitude 10.8811081,106.7976408
	});
	const graphicsLayer = new GraphicsLayer();

	const withProvince = (data) => {
		return new Graphic({
			geometry: { type: 'polygon', rings: data.rings },
			symbol: { type: 'simple-fill', color: data.color },
			attributes: data,
			popupTemplate: {
				title: '{title}',
				content: '<a>Dân số: {population} <br> Diện tích: {area}</a>',
			},
		});
	};

	const withUniversity = (data) => {
		return new Graphic({
			symbol: { type: 'picture-marker', url: universityImg, width: '48px', height: '48px' },
			geometry: { type: 'point', ...data },
		});
	};

	const withWay = (data) => {
		return new Graphic({
			symbol: { type: 'simple-line', color: data.color, width: 3 },
			attributes: { description: data.description },
			popupTemplate: { title: '{description}' },
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
			title: "{title}",
		  },
		});
	  };
	// tỉnh
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
	// trường đại học
	graphicsLayer.add(withUniversity(uit));
	graphicsLayer.add(withUniversity(ftu));
	graphicsLayer.add(withUniversity(kien_giang_university));
	graphicsLayer.add(withUniversity(bac_lieu_university));
	graphicsLayer.add(withUniversity(binh_duong_university));
	graphicsLayer.add(withUniversity(hcmut));
	graphicsLayer.add(withUniversity(an_giang_university));
	graphicsLayer.add(withUniversity(can_tho_university));
	graphicsLayer.add(withUniversity(tra_vinh_university));
	graphicsLayer.add(withUniversity(utc));
	//trường đại học TPHCM
	graphicsLayer.add(withUniversity(nguyentatthanh));
	graphicsLayer.add(withUniversity(tonducthang)); 

	// đường
	graphicsLayer.add(withWay(ql61));
	graphicsLayer.add(withWay(quan_lo_phung_hiep));
	graphicsLayer.add(withWay(ql56));
	graphicsLayer.add(withWay(tl328));
	graphicsLayer.add(withWay(ah1));
	graphicsLayer.add(withWay(tl748));
	graphicsLayer.add(withWay(ql53));
	graphicsLayer.add(withWay(ql54));
	graphicsLayer.add(withWay(ql60));
	graphicsLayer.add(withWay(ql61b));
	graphicsLayer.add(withWay(ql13));
	graphicsLayer.add(withWay(ql14));
	graphicsLayer.add(withWay(ql22));
	graphicsLayer.add(withWay(ql22B));
	graphicsLayer.add(withWay(ql50));

	map.add(graphicsLayer);
});
