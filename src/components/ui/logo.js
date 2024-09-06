export default function Logo({ alt = false, className }) {
	return !alt ? (
		<svg viewBox='0 0 100 36' fill='none' className={className}>
			<path
				d='M17.5674 2.88847C16.3278 1.39515 13.7849 0.226106 11.7918 0.226106H11.7903C11.6722 0.211513 8.91029 -0.0706127 5.99301 2.75713V0.913586H0V19.1707H5.99301V8.82122C5.99301 8.79852 6.08 6.52368 8.07456 5.65785C10.313 4.68662 11.8555 6.05185 12.4955 7.51599C12.8109 8.23589 12.9538 9.79732 12.9538 10.1719V19.1707H18.9297V8.55856C18.9468 8.41587 19.3476 5.02874 17.5689 2.88847H17.5674Z'
				fill='white'
			/>
			<path
				d='M39.0489 4.89729C38.2007 3.35856 37.0186 2.16196 35.532 1.33666C34.0485 0.514604 32.3708 0.0979004 30.5456 0.0979004C28.7204 0.0979004 26.9541 0.532439 25.438 1.39017C23.9188 2.24952 22.7087 3.46396 21.8388 5.00106C20.9689 6.53816 20.5293 8.28604 20.5293 10.1944C20.5293 12.1029 20.9145 13.4373 21.8575 15.0684C22.7398 16.5942 24.0089 17.8037 25.6322 18.6631C27.1809 19.4835 28.5774 19.991 30.7553 19.991C35.7153 19.991 38.4555 16.9752 39.647 15.1771L39.7495 15.0214L35.2679 12.5033L35.0007 12.7725C34.4773 13.3011 34.1619 13.6205 33.5996 13.914C32.8773 14.2918 32.6054 14.4182 31.6998 14.5755C29.8124 14.9047 28.7437 14.0988 27.9483 13.2686C27.6299 12.9363 27.0831 12.0348 27.1965 10.9241H39.8831L39.8939 10.7684C39.9856 9.52156 39.998 9.30267 39.998 9.24916C39.998 7.52884 39.6703 6.02255 39.0473 4.89404L39.0489 4.89729ZM33.8279 7.12673H27.3782C27.5305 6.32089 27.8831 5.6707 28.4252 5.19401C29.0108 4.6784 29.7487 4.41735 30.6171 4.41735C31.4854 4.41735 32.1953 4.68326 32.7809 5.20698C33.3231 5.69178 33.6741 6.3371 33.8279 7.12673Z'
				fill='white'
			/>
			<path
				d='M61.7508 0.862305H54.1935L51.1892 4.72776L48.1849 0.862305H40.6277L47.4502 9.53849L39.9814 19.147H47.3725L51.1892 14.2941L55.0059 19.147H62.397L54.9282 9.53849L61.7508 0.862305Z'
				fill='white'
			/>
			<path
				d='M82.6508 0.903076H76.5381V11.1877C76.5381 11.3207 76.4993 14.4468 73.0912 14.4468C72.0147 14.4468 71.1681 14.1322 70.5747 13.5096C69.669 12.561 69.6628 11.2023 69.6628 11.1877V0.903076H63.5626V12.5319C63.5533 12.6308 63.3622 14.9737 65.1222 16.994C66.7331 18.844 69.4158 19.7812 73.0927 19.7812C76.7696 19.7812 79.2178 18.8684 80.869 17.0702C82.7347 15.0369 82.657 12.6389 82.6539 12.5432V0.903076H82.6508Z'
				fill='white'
			/>
			<path
				d='M98.8654 10.0674C98.2068 9.24044 97.4177 8.66322 96.5229 8.35028C96.2309 8.24814 95.9404 8.12653 95.6577 8.00817C95.3858 7.89467 95.1031 7.7763 94.8188 7.67416C94.606 7.59795 94.3839 7.52661 94.1602 7.45364C93.427 7.21529 92.6689 6.96884 92.0693 6.54241C91.9606 6.46458 91.8161 6.33487 91.7509 6.15489C91.6872 5.9814 91.7089 5.79169 91.7384 5.6636C91.8161 5.3231 91.9621 5.04584 92.1377 4.90316C92.293 4.77831 92.5182 4.71183 92.8087 4.70859C93.8588 4.69886 94.8918 4.91451 95.8751 5.35391C95.9124 5.37175 95.9513 5.38958 96.0134 5.42201C96.1035 5.46903 96.1936 5.51443 96.2852 5.56145C96.5679 5.70414 96.8584 5.85169 97.121 6.02842L97.2701 6.12895L99.4184 1.81923L99.1652 1.6506C98.4305 1.15931 97.7377 0.697208 96.627 0.424811C95.4728 0.142685 94.2922 0 93.1194 0C91.4635 0 90.0188 0.282126 88.8258 0.838271C87.6996 1.36361 87.0845 1.77221 86.4196 2.80018C85.3276 4.48645 85.0775 6.57484 85.7796 8.12167C85.8759 8.33245 85.9955 8.54486 86.1369 8.74915C86.8468 9.77875 88.018 10.5505 89.0697 11.1699C89.8495 11.6288 90.679 11.9839 91.3144 12.2417C91.4417 12.2936 91.5769 12.3406 91.7136 12.3876C92.2837 12.5838 92.8227 12.7703 92.9765 13.3588C93.0666 13.7058 93.0153 14.0025 92.8243 14.2441C92.4608 14.7014 91.653 14.8927 91.0394 14.844C90.2394 14.7808 89.4689 14.4111 88.7916 14.0836C88.0848 13.7431 87.4619 13.4221 86.9944 12.934L86.8499 12.7816L84.1128 17.4253L84.1283 17.4934C84.1439 17.5664 84.1454 17.5745 84.4685 17.7837C86.6231 19.1943 89.312 19.9629 92.074 19.9629C92.1858 19.9629 92.2961 19.9629 92.4079 19.9596C94.0157 19.9239 95.4371 19.5656 96.6363 18.896C98.6635 17.7642 99.872 15.7683 99.872 13.5583C99.872 12.0763 99.5349 10.9008 98.8701 10.0674H98.8654Z'
				fill='white'
			/>
			<path
				d='M12.4358 33.4541H8.94993L8.28508 35.1323H6.50488L9.8509 27.2976H11.5659L14.9227 35.1323H13.1006L12.4358 33.4541ZM11.889 32.0775L10.6991 29.0779L9.50916 32.0775H11.889Z'
				fill='white'
			/>
			<path
				d='M22.1392 31.0899H23.7268V34.2679C23.3198 34.5889 22.8476 34.8354 22.3116 35.0072C21.7757 35.1791 21.2351 35.265 20.693 35.265C19.9132 35.265 19.2126 35.0916 18.5912 34.7446C17.9699 34.3976 17.4806 33.916 17.1279 33.3015C16.7738 32.6854 16.5967 31.9898 16.5967 31.2148C16.5967 30.4397 16.7738 29.7425 17.1279 29.128C17.4821 28.5135 17.973 28.0319 18.6021 27.6833C19.2312 27.3363 19.9396 27.1628 20.7256 27.1628C21.3827 27.1628 21.9808 27.278 22.5167 27.5098C23.0526 27.7417 23.5031 28.0773 23.8681 28.5167L22.7528 29.5917C22.2169 29.0015 21.5691 28.7081 20.8126 28.7081C20.3342 28.7081 19.9085 28.8118 19.5373 29.021C19.166 29.2301 18.8755 29.5252 18.6689 29.9047C18.4623 30.2841 18.3582 30.7218 18.3582 31.2148C18.3582 31.7077 18.4623 32.1325 18.6689 32.5135C18.8755 32.8945 19.1644 33.1913 19.5326 33.4037C19.9008 33.6161 20.3202 33.7231 20.7924 33.7231C21.2926 33.7231 21.7431 33.6112 22.1439 33.3875V31.0932L22.1392 31.0899Z'
				fill='white'
			/>
			<path
				d='M32.616 33.6779V35.1323H26.8032V27.2976H32.4762V28.752H28.5306V30.4529H32.0149V31.8635H28.5306V33.6763H32.616V33.6779Z'
				fill='white'
			/>
			<path
				d='M42.3524 27.2976V35.1323H40.9264L37.1843 30.3751V35.1323H35.4678V27.2976H36.9047L40.6359 32.0548V27.2976H42.3524Z'
				fill='white'
			/>
			<path
				d='M47.1271 34.7446C46.5089 34.3976 46.0226 33.916 45.6685 33.3015C45.3143 32.6854 45.1372 31.9898 45.1372 31.2148C45.1372 30.4397 45.3143 29.7425 45.6685 29.128C46.0226 28.5135 46.5089 28.0319 47.1271 27.6833C47.7454 27.3363 48.4413 27.1628 49.2133 27.1628C49.8642 27.1628 50.4514 27.2828 50.978 27.5212C51.503 27.7595 51.9442 28.1033 52.3015 28.5508L51.1861 29.6258C50.6782 29.0145 50.0491 28.7081 49.2988 28.7081C48.8343 28.7081 48.4195 28.8151 48.0545 29.0275C47.6894 29.2399 47.4052 29.5366 47.2017 29.9176C46.9982 30.2987 46.8957 30.7316 46.8957 31.2164C46.8957 31.7012 46.9982 32.1341 47.2017 32.5151C47.4052 32.8962 47.6894 33.1929 48.0545 33.4053C48.4195 33.6177 48.8327 33.7247 49.2988 33.7247C50.0491 33.7247 50.6782 33.415 51.1861 32.7956L52.3015 33.8706C51.9442 34.3263 51.5015 34.6732 50.9718 34.9116C50.4421 35.1499 49.8533 35.2699 49.2024 35.2699C48.4382 35.2699 47.7454 35.0964 47.1271 34.7494V34.7446Z'
				fill='white'
			/>
			<path
				d='M58.46 32.3564V35.1323H56.7233V32.3337L53.8169 27.2976H55.6608L57.6662 30.7788L59.6717 27.2976H61.3773L58.46 32.3564Z'
				fill='white'
			/>
		</svg>
	) : (
		<svg viewBox='0 0 1304 461' fill='none' className={className}>
			<g opacity='0.3'>
				<path
					d='M241.811 38.1208L241.96 38.2914H241.981C254.036 52.1468 258.733 70.0067 260.375 84.6973C262.023 99.4408 260.588 110.932 260.472 111.846L260.468 111.877V111.908V250.126H179.083V132.997C179.083 130.514 178.587 124.16 177.549 117.257C176.513 110.364 174.926 102.846 172.72 98.071C168.273 88.4245 160.681 79.0821 150.283 73.7532C139.868 68.4155 126.683 67.1294 111.127 73.5291L111.127 73.5292C97.2237 79.2517 89.9693 89.6351 86.1966 98.6058C82.4287 107.565 82.1207 115.142 82.1207 115.342V250.126H0.5V12.4766H82.1207V36.0747V37.2133L82.9591 36.4428C123.036 -0.39004 160.948 3.30665 162.485 3.4868L162.514 3.4902H162.543H162.565C176.218 3.4902 191.783 7.28928 206.071 13.529C220.36 19.7694 233.328 28.4317 241.811 38.1208Z'
					stroke='url(#paint0_linear_373_5633)'
				/>
				<path
					d='M537.908 64.2823L537.906 64.2837C526.26 44.251 510.032 28.6759 489.621 17.9319C469.247 7.22739 446.199 1.79688 421.11 1.79688C396.021 1.79688 371.754 7.46049 350.933 18.6294L350.696 18.1888L350.932 18.6295C330.067 29.8203 313.451 45.6318 301.506 65.6451C289.563 85.6545 283.523 108.412 283.523 133.275C283.523 158.122 288.806 175.476 301.761 196.725C313.872 216.583 331.296 232.332 353.597 243.526L353.598 243.526C374.897 254.225 394.073 260.831 424.001 260.831C492.157 260.831 529.8 221.548 546.173 198.119L547.265 196.547L486.297 164.067L482.875 167.335L482.875 167.335L482.773 167.433C475.62 174.281 471.227 178.486 463.435 182.343C458.458 184.811 455.005 186.472 451.228 187.772C447.447 189.073 443.358 190.005 437.103 191.035M537.908 64.2823L437.022 190.542M537.908 64.2823C546.424 78.932 550.923 98.5124 550.923 120.918C550.923 121.592 550.755 124.423 549.49 140.739L549.49 140.741L549.374 142.312M537.908 64.2823L538.348 64.0437C546.915 78.7891 551.423 98.4582 551.423 120.918C551.423 121.618 551.252 124.479 549.988 140.777L549.838 142.812M437.103 191.035L437.022 190.542M437.103 191.035C437.103 191.035 437.103 191.035 437.103 191.035L437.022 190.542M437.103 191.035C424.008 193.201 413.724 191.635 405.325 188.145C396.933 184.658 390.455 179.261 384.952 173.815C380.486 169.394 372.857 157.468 374.441 142.759L374.489 142.312H374.938H549.374M437.022 190.542C411.002 194.844 396.268 184.311 385.304 173.459C380.913 169.114 373.375 157.33 374.938 142.812H549.838M549.374 142.312L549.34 142.775L549.838 142.812M549.374 142.312H549.838V142.812M547.997 196.37L547.552 196.134L547.709 196.784L547.997 196.37ZM466.361 93.6747H466.974L466.851 93.0741C464.71 82.6523 459.817 74.1146 452.25 67.6992C444.078 60.7693 434.173 57.2588 422.095 57.2588C410.024 57.2588 399.734 60.7018 391.558 67.5271C383.987 73.839 379.072 82.4435 376.954 93.077L376.835 93.6747H377.444H466.361Z'
					stroke='url(#paint1_linear_373_5633)'
				/>
				<path
					d='M552.291 249.791L654.586 125.01L654.848 124.691L654.585 124.373L561.207 11.7812H664.093L705.36 62.1257L705.747 62.5975L706.133 62.1257L747.401 11.7812H850.286L756.909 124.373L756.646 124.691L756.907 125.01L859.203 249.791H758.599L706.132 186.537L705.747 186.073L705.362 186.537L652.894 249.791H552.291Z'
					stroke='url(#paint2_linear_373_5633)'
				/>
				<path
					d='M876.773 163.884L876.776 163.859V163.835V12.3281H959.874V146.264C959.874 146.473 959.955 164.419 972.593 176.97C980.892 185.226 992.705 189.365 1007.64 189.365C1031.31 189.365 1043.36 179.053 1049.45 168.466C1055.52 157.92 1055.66 147.165 1055.66 146.264V12.3281H1138.97V163.983V163.991L1138.97 164C1139.01 165.207 1140.08 196.38 1114.51 222.81C1091.87 246.181 1058.27 258.095 1007.66 258.095C957.034 258.095 920.217 245.858 898.145 221.823L898.145 221.823C874.027 195.573 876.65 165.127 876.773 163.884Z'
					stroke='url(#paint3_linear_373_5633)'
				/>
				<path
					d='M1362.75 132.12L1362.6 131.941C1353.58 121.197 1342.77 113.708 1330.53 109.649C1326.49 108.309 1322.47 106.714 1318.58 105.168L1318.58 105.168L1318.58 105.167L1318.37 105.085C1314.68 103.626 1310.87 102.116 1307.04 100.81C1304.47 99.9398 1301.81 99.1181 1299.11 98.2857C1298.73 98.1681 1298.35 98.0503 1297.97 97.9321L1362.75 132.12ZM1362.75 132.12H1362.81C1371.78 142.885 1376.36 158.061 1376.36 177.251C1376.36 205.934 1359.82 231.864 1332.02 246.581L1332.25 247.023L1332.02 246.581C1315.57 255.292 1296.05 259.962 1273.95 260.427L1273.95 260.427C1272.41 260.469 1270.9 260.469 1269.36 260.469C1231.36 260.469 1194.39 250.445 1164.77 232.059L1164.77 232.058C1162.53 230.682 1161.44 229.994 1160.89 229.534C1160.62 229.312 1160.51 229.171 1160.45 229.062C1160.39 228.946 1160.36 228.83 1160.3 228.581L1160.3 228.581L1160.3 228.573L1160.14 227.886L1197.43 167.898L1198.97 169.445L1198.98 169.447C1205.49 175.898 1214.16 180.126 1223.9 184.573C1233.22 188.848 1243.92 193.723 1255.06 194.557C1259.34 194.879 1264.3 194.407 1268.83 193.098C1273.35 191.79 1277.49 189.632 1280.08 186.538L1280.08 186.537C1282.84 183.234 1283.56 179.18 1282.28 174.512L1282.28 174.512C1281.18 170.513 1278.69 167.886 1275.5 165.946C1272.34 164.019 1268.46 162.751 1264.54 161.474C1262.66 160.859 1260.81 160.248 1259.06 159.575L1259.06 159.575C1250.31 156.207 1238.9 151.575 1228.18 145.595C1213.68 137.498 1197.63 127.455 1187.91 114.095L1187.91 114.094C1185.98 111.448 1184.35 108.698 1183.03 105.97C1173.44 85.9448 1176.84 58.836 1191.82 36.9082L1191.82 36.908C1196.37 30.2265 1200.75 25.5753 1205.9 21.7409C1211.06 17.9017 1217.02 14.8677 1224.78 11.4382C1241.15 4.2032 1260.99 0.523438 1283.77 0.523438C1299.9 0.523438 1316.14 2.38413 1332.01 6.06338C1347.23 9.60345 1356.72 15.6028 1366.85 22.0217L1366.85 22.0221L1369.95 23.9797L1340.8 79.424L1339.2 78.403L1339.2 78.4029C1335.55 76.074 1331.52 74.1331 1327.63 72.2702C1327.2 72.0612 1326.78 71.8553 1326.35 71.6505C1325.52 71.2507 1324.71 70.8552 1323.89 70.4495C1323.17 70.0948 1322.67 69.8709 1322.23 69.6732C1322.14 69.632 1322.05 69.592 1321.97 69.5521L1321.97 69.552L1321.95 69.5471C1308.34 63.7768 1294.03 60.9443 1279.48 61.0721L1279.48 61.0721C1275.41 61.1151 1272.19 61.9967 1269.93 63.7177L1269.93 63.7194C1267.38 65.6809 1265.33 69.4284 1264.24 73.9375C1263.83 75.6495 1263.5 78.2482 1264.43 80.6561C1265.39 83.153 1267.48 84.9206 1269.01 85.9567L1269.01 85.9575C1277.34 91.5738 1287.85 94.8136 1297.93 97.9204L1297.97 97.9319L1362.75 132.12Z'
					stroke='url(#paint4_linear_373_5633)'
				/>
			</g>
			<defs>
				<linearGradient
					id='paint0_linear_373_5633'
					x1='130.831'
					y1='2.80469'
					x2='130.831'
					y2='250.626'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#17caf7' />
					<stop offset='1' stopColor='#9139FF' />
				</linearGradient>
				<linearGradient
					id='paint1_linear_373_5633'
					x1='417.223'
					y1='1.29687'
					x2='417.223'
					y2='261.331'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#17caf7' />
					<stop offset='1' stopColor='#9139FF' />
				</linearGradient>
				<linearGradient
					id='paint2_linear_373_5633'
					x1='705.747'
					y1='11.2812'
					x2='705.747'
					y2='250.291'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#17caf7' />
					<stop offset='1' stopColor='#9139FF' />
				</linearGradient>
				<linearGradient
					id='paint3_linear_373_5633'
					x1='1007.81'
					y1='11.8281'
					x2='1007.81'
					y2='258.595'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#17caf7' />
					<stop offset='1' stopColor='#9139FF' />
				</linearGradient>
				<linearGradient
					id='paint4_linear_373_5633'
					x1='1268.23'
					y1='0.0234375'
					x2='1268.23'
					y2='260.969'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#17caf7' />
					<stop offset='1' stopColor='#9139FF' />
				</linearGradient>
			</defs>
		</svg>
	);
}
