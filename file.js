let images = []; //aasdfasdf
let currentIndex = 0;
let targetIndex = 0;
let transitioning = false;
let transitionX = 0;
let direction = 1;

let viewStartTime = 0;
let popupVisible = false;
let popupImage = [];
let popupData = [];

let titleImage;

let currentPage = "slider";

let uploadedImage;
let uploadBtn;

function preload() {
    let urls = [
        //시커스1
        "https://lh3.googleusercontent.com/fife/ALs6j_EMWbXEcZR_vBd-aZkVpAC8GOcrK2crG0OsDNTSAZYZkt8zcAmmKyPsf_tI7vc1JwVUSSz-CboRVP3GxBLrkzISF1UuYGmEFGmcmeAvjiWwW2mySk2TS1cH027GIRXeok1YPWcnQ15P2CbBvpi1xKMs3MbsRhjBTc07pk1E17WQerSYeQGvfUcaLOiku78MTFlmyNef4cPKvmDzK8XQapuLaX5d049XlDUWF6AW3iKa9ReAwFpepAszkwZgPAeNc8eIB6WZEuSPVUwsvBtUwmrQ_i0cxB8QdFl7SNJ8OnM0Nq3yDCWny4v41BQg_2aqsvALXfdbZ5f5Fg-l4eSj5pYhnHSApOfzAAT4T-xXjgGcwFLe4oHBgrSjQ9umEZgdKaNWN6e1gZeugHvcOuv0Hgcjn5HQE3qYMSBcG3k5ylT9pRpevGns1i1OGAFkcpZzH2tcpBVF3fesZKbjSaGCYZUpQ3O2XfaxHUlJiUCstuigy6PwN3JlACN4tWvpfpXOTIM4YoB0TxGYs2wDb1zuq1BXVbsaVvuxHJ4Lf04oI2RJUbFKHWVEy2ChibIKzMsBHSdqbWRp59Ta20PnV4PPCL0Qzqe0OxUfgFQKWjtKYE5nIrET-QDOm0PrPEVMXnPD1hgrc9w2brSxGZ1tFheI4K0XYqMLupR0lgbM9Jqp5Wlf__4W7YU6u7k5N-nvescfHF_hxHibOiTlJ_BXkbZqjrgu7a40eJrSkC1PdaOdyJzVooHVYQ7pNEA0uesTe8oLdne2Dj4-8U1Bg8pT6tccDaMeTxwcpH76YtOjpFUcrbXQwA5YVzYmUrt16woQI1k4RXa8121vjtxJEa0Yqvadxox0ixZxA6pl4D3boD08SaAXBX7oG7oKVu4mNKd3bLz3vBleJ8zShcVMODDfmKmSxUx4av_c9D9M7UUl7Q4cDcZHKEim0craYVfVZWac9VYHUqdof2RJDCq_RAbqq918ktzpLyro-DpFmOxZ9ji2ZGIusJnLWSdZJLm5WWFVJ2PxLsSaAyNYvuOCKBSK0Y8kZmesITCk0fVwgLx7WQ8duWnBDEexZvqiU0VfGZEmMXMdjw2_EQUY9o1Rommt0odddueSemUaKUxg8bp0zojzNf-WGIbjwNXclu2PamAaUdEnFRYYuogPbCgSOCJraILoS4IMw465WfkHk6J96b6DpnZKdK1tHd1jglyCy6NT4XMVPjLFpMZt6jX-8QVPkgWIQOVa826_ly7qm5PW4vLP7yJcaVsjXrGhfrLmUH_pUUGG5YwVwJnaGOd3TPz7Unm18fW7XYltx2aMWQCAp4ES2lA-T3jKPv2Qzgv__Qhk95j2RsqofhXPijkIXRj3JyJ_vfJ_F96r6LEb3bjmGahUpQkaAL5ibYgldBHAVZFEFD4mDnh06ayird78PdMUFOSdfErywtozMKXKVC7i34r8tyeUGTbDEH9V9XlGmns_dtorjyzVXDsNW3ifyhTeMS483owFZ4fqC2NYaB5dXKbZnwkpqOewYfOgYPjByZvszq0ASdO5FNvrIFJvGbcu6wTPg2eXH5HuG1nGPWEz9Zu1N2Dfgk7XQKuRPwSpWcUTmwWzLMPMkV7DnHu6VfZfVOmd5XqSFAbNHyOU_EkiXtsyk-ATYKOdXjs",
        //파동1
        "https://lh3.googleusercontent.com/fife/ALs6j_EsLNc4PCYjrk2pdaRwik6_k7kD6jCyoApRehmNNGmj6NPrX2d05dIL2LOtluNpoPQCtR3EMMz7QIpBK7acGMYGrv0-rxOiLUhj_fqgUJiCaI8Jw1KCIVXATSqb8GDh_goWtDkLUsgIv1k9ejQUAtvhiSMikkmgs5Z8qAAwO7xi8fGq0JuP4AICb1ZoKSfsGqpv3gMQSTlEelWsIRovvMhvi-gekElJuZHcBDczFizFsBGZvZ0D1-FK7jiDU88ii95tiu35hSWXQcp0YrXk4DG-XTBqXRmtzgGElUITl3vr_xmEp7IOqqmKUZ4RTG_qmlEK6TnRxHYEAv5X6FkJMwq7iOTGw6X9eeIq7eluIwn9bo7v75kRlw985YtXstoOzEjbE8naKcRrYIsKzURmkx8cDgH5PzksfUkP5lHGJiQVjKa92Tvq1iK706hZI07T-8N0RbJZwxSxkis6qVE_q4KH8VeJakqi7CQcpo17xxaWTd7ejN7P0ZZ7hAO05XHpbxLwlnLAaR6HgsRtyM__kxyQ57aaJArJU6T7Y1R3vpf-kOZ7_osbko78O-2tiGEvfLjIxiJQmUsVUgZ4XB_rf9og3n0NSdEsAN7BV_YQUyxk9iAi3PNP2dqSeEZY3w_HTp4ybU3MZcPYVugZ397kpYfHq0Ycm9VnWveVyReg6nexWUXJiGfmHVc5Qf4w-P5PEf3ZlARdMqYZqBudkwZUzJGb0HvIAe21wOUr9hLEPtxJ9CZI-W-0zaEiUW-CfxPKgsFDFT6gCSVVLR9qoE0w6qzDDCAyJYjmnde5KgXgl4w60aCsWcRkJG7w6z6xdGlHXmFHD6ARdP9Ua6a7hwcPLpO5FsX6-2aCUSgLM30k_7C3W03lKSb_pX-3PPiQAVb7sjeIL_UrQgM4zqi2PZ8l9mGRA4YcF_gTtROmVGW0U9df1b0klDtgH3EXSwDtShSF7ZkkNMZbBqpYvp5PbjS4Pi83Hog76NCih53rcv6TcWoJ_4ox49yBDOPodoekAGRbVRhRayBUcaOBIzgud2eowXcB7Mh9TqHnxH_oaCRpXLjAjTLBTNrmkDJhouDuiKkyr5G4bLnRlg0fSmp147yUe0Ea_kHmPECCdXbekxd33719Uoh3QHZ1A1LlrUrboay7RMa7x3ZQn-gJF9jE4a_ghPZcIet8NaSf7O-Npi7mAAUh3Smlv0d_epvpDEhawre9hd42sv9_l3bDP0uzOcG1e1tLHUqFfRnFF1zycEj8nbYi-L2zLEDnfq7ZITrXKcK2Lq6Wfp3oYCM7FEgpQ4vlXrQSGywvb3TOwMoI3FZG7sXkhiJcmkGzlUXJAsgOlkr81Akm46yvIwqosiANbcKOg9-LUbl71fHPohAx5EPY7HDzzM8qpBQjAMA8OHsKYgBW_WS4Fr22vR6h64ZSiH5oAV7tNJSHxnwX-9ogQPtphX1651CtR-nsEga70O08WLXhKGdwVkUDC1pfQF0fHvIbsE-g5Ozj1kEAnvJ40lgo0WDkPptLh2di54Tyb4fxiCNrm9SfKjuDu0KzH91MofDlD3XuWKqAcDYjCeyhO-dx-VGFAgk6PTfzFeZadMZRfbkYVP7Bzwy1ijhBCeoxVjB7m0HDYCqkPMq5KLNgqIPnMmh0m2E",
        //내리디깅1
        "https://lh3.googleusercontent.com/fife/ALs6j_HvjoIhzoHcCahM1n9jGbcrO7bNcDAQsjojHTBptiVgrCEKH1l59uL9SYA_0v1w5uUPjHJgwC0KoBu6yZnovCXG-dZ3pYyzShKkEhWU4ZjP69H840yzQ0t7kJGthfcawu5yhMiCEhabGUCqGBUxbPnYP2Loo0Bm-RCYAXZBXT9vX_ilxJzgS0HQY3pOSHUmGib280kj7h55PefRlGW_m3czvKYRER0z07JzuFz9W6pF0aH78YURJQcwzI4L34Q75LzwvVnZTsgBy0c0b7OWzrDD5pv2xiLzgi04_X4IG75udRP1ll99rOyBD-OozSafQFzsRD4zzbVc4LzugMAgtgPEGkd71SwyQRo5LC4bxn7Biltx4lWuxqoYK8oQHMLTFlDXeECjSjLVyuY58coERwURNZmQQFXHalzeDnWavEWprR-h8-cPgrx0jpp5PBjjy5f-uMR7G3dYzS4j6PLs-PK6J98rk0N10w09W6lout9LfuZq5QIND4hnv2AXskfj1NApesAwAjA59T8gY7zf4ZOLf1dJnoSwVloB_FYHsxILGIcA2wGTRN_LDGyEYnuSJpbS4HCmDx-c6-fy3pdCa5-83K5642HA5xSVukH8cenT7uC_IuXsfeCdHD1UZog3xWbyHUvQVfoao8SREoF1JgUeeQgYCeusSqRaD4Z2H8iUgPDz03AtLSTxLPqFZHtOPMFldXKpj6ifQDLglKh902DAtOb87DDq-HE7Ti1sN4ahmq5qpfsUoRthSek5lV77nM3Ga9xzx6t_PG9o1Z7dSMnntGZAKX7kdrRHUhrri8JBnVt-xiSxPbIiUOgTp9T_UODWjV54rJVXrl_X23qXxlfZHja3szjQ9REp5MY4Vs6HYtjkj_xTtBcUJ8Gjm1mxsMpUZ1gOakr56P5uA8qSIfFE4g-thipPznz2oybBYDJSjk_HGX_6wxcos7lqmmZQWIa_MmGRIDpoXETJtU34grPhp1kmQxx-7KfOGEpgBVrem0DBNf_QWYJ7RcEbRBM-STzHK3A-EZZtvMx3-8pawNuN_-7Q6DCXGFCj5A2ypSwUD0qlFYfThN7nptymNNx-zBOyCTegg1ZXmDbgAyNnl_93Ng7VdhZLb_mQig-Xe7xWdvQvs5C-Wl1lrr5oPSLuWqoouwhyKTcA2UxuasvcOKZ8mWaWn2uP0Jro6MIMRo1eiEImgrxrRzB9Ba4QsVSgMIZ6Nm6n8SpkI5o8Btg-0uP62HpqTXsXFGBe_Ht3RDvr4DBjDb9bVhm1Fwv0rtFMXXshiKbpXFkkaFBIlXUPfIqerewEuL3_ptm2yCqZv5vkyzL2DWI_-zkdd1I1tK7hQmGrBGoOeJy_MyI37JpsjNYN80sIiOk3COewUjnGNfrX9AQwgTOE8F0X1x7tPPIrlPg19Wb-F_wSzQxeqEb_oHNb4ly_6xGZsDQnUQufbxA8zElfgZxaaNR5IFa3EW70GWFqJtLDeWu3HLQDPLrqQVThYXjt-viEsZxE9jfcksOc_6_iFfHz2_9dVLHyAxlOvS9FUr_juhdl1uEE8DPDytpaZNpZNp8A5fxd2IT_A8K2S9pAz8fNZ1Ma7RXvR_GZ-w",
        //시커스2
        "https://lh3.googleusercontent.com/fife/ALs6j_HK8evR9rAXZ4Zf61AyvFNEChwtJjU1B0zWLyn88ezTan7IoLScHdEXOunAY4pIM5FAMCPD2Ik97e6ycuqXK9piVOKvsnJm_QkTIvMvRLwsya3UcxMVxxx_P6_F3zBr-DKdSqgFaQ_dqRHiprjbpxkVgJ0zS2zf7i7U-oexBEHwTkR91RX5c1rYWJlDwOVPrsAiVmK9INXczTX-5l8vDjbjIiyH-t4ILwH_VRxV8cM6ol8EAxZsLM_jH5OQfmrdFN8QYtR9eMHx7vG9RfPiXKtqjLTmMObBLjCJW2HKZZHaocx_pLdrm_jrAyMefa-FUoZhg5omtiTK6n430NYLUikj4PAI70g9XBupvmZC3QsWLMlHug0KTTFnfH4Sd8ZuzQ94nIhdAfxvyZS-m4xOdOlW8iOV6dGessn_Fi8dwSa2fdEEmeI8BQN8Z1htW_aRpiThhhc4z7yh8191678ROYy9m-pxZazlp-vMF2UdyvuZZKedbpIeOOmaVIDjg3-I7bLyopMzjMm0WrGSzELdzdhyVN07lGYqlxMGT7TNaYgS6glBz9UuRFkkMxp0cTiXwcTH9R8MJJeKIxayLHRoF3WLZZPaKL3a6EqFy8FOK_dm-2QFphOiNOM5yldl-fpiulgxmguX-5eMaQZrwOqzhHqARXWy3hbANcEb2mfERyrO6UnhLuyBluWEPJAwJdYjF-aVgwuAF-Dca6kXtuMeq8jP4RLUOGYmxQ6v29tv2daQxq114MbeinbZ4tSW_p4MEovXtGh2M1xHPWfGh3dBOc1NsxF8HjUv2PfYp6yOak5nWS9KrOOFMzNDxIkEHCqHyAC1HP8kwhLLDtYjcUg-dxagwKultIuWIYQUdVUXqdphOCBFEoZh4Qj-fxO7J1DmoBD4dRoyH1GJJDNTxuqz9EaHRds7G_V-YjM1SRdyhuFiRrZN29asJO_gGNZQNRAuZt4BeGdthcCoulm4njtk1wDHi1Qz_8PQNG0NBZQBC7HWV6dgzTnWTwcovBtJz5W0algmh-1eMb3NIqMDtkISN0a8-SE25zt7fJN60kkDgpzWc8XTVBtYd1i7NN3WQDgOGmY550rWX9svsmigJrk_nkdlE_s45tWJQOIiHlbEQVuGPhgHvopiK8-tV9PaT9rAR2jeaQMTTXS099idEUQqzVfXYooN03w5oechYAlm87WZvdlp3g5UFXN9R-OLumAtNQiMTBy389WIjtAEPUxkgrZqiw_x1iCq_gakJQ7bK7VhWRCzWazqTnfhVvY4ZbSJxDMcPgTriy--YuOiwb57AcZa9K9Qh4KuPRsTmCwt8VtXjxjpzG7W35ZmkHH-53IBokV8wwcnrs9uIx0wgRDbGvmN8njoDH4RLryJJ55L-jCbXVoiqyH7zfSNhoEMlGh5WfVJ7PAOvYge3LJPdfSScTot7K65gII1RP3Pg7UvmwnQQAJ4GbUq1KuiUxhona3w_W-KnU0hX_BD3-Bos8jrlQAhWbA0MhW_CMtW9a7Rle6EkoG5byLZ95CjXhe4smskf6GbOpPU8jlxczz_w6P2i9WVAdDfZ2vhPyPfGo2Rrc1CHNMoSg-Pw34Y44w0L-JNLw"

    ];
    
    let popupurls = [
        //시커스1
        "https://lh3.googleusercontent.com/fife/ALs6j_E-I5G8PisKuVa8ZMEBj-NMz3k9f2cJcpf5IgGGXu_tS0nXte7DBGbZZ-n_iWgnRQ9ILSk-ZlCxnE0DNfSlitIJQEv-6XZInUrxHzxqxNG07Xlc3OdzBPb1Vtt2dgnLbbrFVYZQv8iGewBfud0-C3rk86ql5F5lfMXT4eNIU9q6mEYV_L-HHLbmEU_E2UHNE2eWaxw7FzeNgzEEdeUVhX_rqeq4B6kGc-YNcC6GM1x7CcLaJPD8S6p2IguLY1hnqA7E1Eocq-AgB6Rdl4zNRq_kridjkU45HgCXJiysJLt7rTFQoHRYa8qgScKKHV6kaAkvq7iEOKQB0MyRsOjJgj5UXk307px_V_ihMqRgj8xn89Ll8_TPFpV8C1Uz0aPS-Nf3jgKJv8v0NQ5Aklq_058qi-60gihYfHb-I2tuXjV3cCa4Kx0fO2LhMEyYcvkMl7xnOaG-qq0OKkIu363diLbEMnPWdjCiCLOTW2s-jMojZmrExxwWj-waU8QuGh4oJ7Jzq4zBGQnmHqtfD77YrGWM0q6PkpC6YLiiTtXvaPqh0mn6OCdAlcFv-_lyf_m0FQK84CCeQ790QQIiRe45N8nsByayD3JcuQ75vtDrSq1XEtDdOqcnh5pAEjLApTzitBGQWhoukIp3YjhPXgHJdPpjGx-kSV2FZP49Qs8apKGcwMqWrRIk1jVU8BOwC0fHiyYOAAWHSmltRuIFZVwUJe5c0jro1ptmCbgaadbF2iGwmMendwXBJ3a9ZyYVg6bu1rg01Bd6JkY7Q0H5sVghbLPxN2OZRj4kKN8Zo5WRCLTUzK-DZvELqDSrLbu_d5aiq2O0GtHuKgyRoNWDmHkoCesdNeeJeFDbhJyiFOIJ3OiUqIv3zhxrLMhhQHt__lP90CHarNDr9eg0UelhAC65UK0A17IWh5g6RnhalrM9l_YxeqPSyPm8TvJBkupnh5tU-91fmMa0WmdUtlSWrBf-ZJHsZQgXvT0DXxNn6yWBFDAixkRvAks83KgI1k-5jXel8mX79NadlyWZTCUqGhgBR3caMO-YGspjDQhifO01DEZUA66L2bVbe4dovPNBbZotnEmag53Lm26TDP2kn3_FaiBlyr-G2zfYcsYE5yhhFZ4MIowt4EISBHdSPsaarwnh_10jMw8OxnLMw_60mFY32ZftHtIeF8sUf0ZPFu27dte3Xui1lr4-UySvYiMUDrVRweRSRGKxDIZb1Z6G2M6PrAesi7Jh3s5Z9FOZvdLX9gbcM6-6sIb3Mo-tKBjLN9gUIYUDb8ZBNGbW-jtYtevLbpEQAWHoDnzrzj-WYNPxrtj7ywU9I2dUNtI0VXd1KsjTLsMsFiQCKsA7MUYdJB2uRmY6OTDf-gK61EzF1etIurtUgJQ5IjhdDlXh1y-I2o7o-S1g_KwnjptS3-XdOqx1EJbmblMG1MjUFNSbg7JAPcdhwteNjpKpVa0ikd5TA8oIfMV0Np3WmaQ75zzhu0OSM9MTzR1qpUtrjUE-iddqzKgyu3oY5EOXFoscEB3coP2Z3uIcFsCqU-ufuzvZjYgSQSeCsYYOKW_kaBtrWCuojZYAav_cj-VvdAT4REW1QYq-QAvEUPCSuPzH5pjG1L4QV1HYFnwoGwlM_WJh7B5REVi32ogK6eo",
        //파동1
        "https://lh3.googleusercontent.com/fife/ALs6j_FJjmK3X0ImXn8gCP-T8UQd8Io5stMYEqDwM8yzJOE6DC4NSUoesrD4X0QBWux0iGn2jwBvWrU4_rXSiggJJ2ST52LWIYoH6J1kssx3TaNQor5_CMrcMncyIuONjykFZpEk7BGt8kWej97A_xAw6xv4LApoTyuFMUDuYt4F_-WhxLgzA-9GS58gdwHhnSdXeKMBBCzYa-Axw_FnC3P1VqNTtDQc59PsjlwEjc0AKbZNTFd4wHmPynvgb-H0kE0tKIaCYZoSMMeQ41UZNGXRfl-8dTr1lf37lyguBdohqKvb7qTrlwhgypWZaks2RvrAj3LSKuTSp-MU2lPnSUaFcyZ26X8p443zib7v8QeZSgL0m_LCilA7ax9CIxuaqjX7F17w2Nn7zAaPc3r8fmcFZO2s_2MJax2bOO8bTbvuV_2aFiXsWgXvE8IbXWA-hSwuNFiyYRUkHb8mAqDhhgB11t6xbvss2-Zmq5nV0UatC6PKa6d2uYYG45xJugmEopyxp8ar6Jm8tp2DTDeXiMuVOIW4SGD-ku09VFFf_ifVmzyFgmFf2Py91btvTRy79koxr7JRc4mY27BJ-z5tohKzPB587XhmdN4OMxv3D3r7MDIV71PpkE6nji4I5OnJRfCsU6em5gsfgWZvs6W4DiLiEQShGYzn4yOA5xOC3GXReuCCGeW647-FuvC8WzBIsF0rFzjDi5-PyKzm2msGXYJ6w9Cm9MZS6Lj_99taKQfibtOg_KYxGlTb9YwRwitE7zmlUSENxStTa32m0PM1x3fB2AxjV2lyXJlgXEMioexYdxn2Q9-MXC9hmCUDBdUG7k7g76UAq5SM7Yu4InzlwzX9pQdV7dMob7E9DqQklaMYZmcvlkXPZBi-Sfla-7SkPPDMeiyU16we1B6EjEh2Rbyf6271Thu3QXnJniSCQDePD5fxkxaHL-r7r1EWjo_uC-amnHVe-wr613UE6KjQyYGCB3y9XAjdkbXefuwP2nBCkf5XmAfenbE5yPd015OgvvI5m9NyWbb1ORP0mZA85bb8WvV8OoBhIJUMYAOlx2tporaUva-i-0RVLURLtP_NFjygwdTkrMbCh6O8q9Y2hjOygiFieyv_AaWHKd3MKUumL9dz0YH8ev_HmYL92kn0J_wmvhODrPP8t1GE9P3q62oSDzG1ydqZD97xyd9pvA5fG3sGn3TYmBrmBHzoAvOeVH8zDzZ_0zloDIQv_OO3o2Lt27e5WP4ZDcO8wGlzsuGeDYkEMjLPa-pgyhm6l_ZDyXRDfZzR-Q8616lJYr3P1w_3gtNX7Pg2mhWk2Xa2P2NV-B7KqUCYaTR5P2imsQ_RAmpGYQrpvMnYp0f9qygMdFjb5hqxYewhRfJyuWPuM9-8gbKNIqcNsAuM-KUkCczQfmH_TwynbSZWUXf_AQVEOXqYioumH7NTJdIOGklFBxOhwP-vUvHa_ZTbmHLwjlxnFanZI4L6ieN8QCZaawWlyhuvu0V9qzzcMifYkeLP10o70C21wd4VYO9FwKHymSMVkJfmgkj7pbyXctCMUamOa4TYmWrYa1F5qe3kczqtswyxCaTupwFqeALLhaf3t2_czNQ71cb1KwkdMnlFw6tRbOIHYPvlIWyf-pmGNKTKa93uOP2zW2A",
        //내리디깅1
        "https://lh3.googleusercontent.com/fife/ALs6j_EMZmAmAFkfeePgdxeKI60FIWqI5kqYQkUd2GePtNp2nUab4KlwKwTRse38YSXUkER-0CXDWVpGZdD8x9UtY4ylaMjDxOw-bFphfCBvT5tZ9EMSufNiWiVsgzNY9laPMeCyi_kKhCt1aRPcSDkJoWv9NDVjegGiSl2UZ_LNSuCNW6d4wuI8HUjyejsOR3a0UNI7KIT8qcGUDCZwj2lT7gYpJZJYHH5roMIg9-vB2oXwAQCQ5BuVhiId8rs4i-G55F6ZYjG27iTWgIEzrLOGdVL0ndvuq_Do9_pPu8jXqlNE16ZNhCJRqaY_CEndgwmgiDNFEuAzy_NoqKPNbU9XCnyh6ZQ6OM-GphmHP0cfVfuDAa4W4r9AUIVc0bnKvOml0zFDHG0owWU82tBqjY955bkTqzA_vqbUIu5iuDv3ylwQDJWvc4XY6cCMrZb-bVZDgJk8SRcIO7Nj3FSQno3oGP3TQYE2PHym0QpKQmdnuesMDPzVfb-5j3_kRygmXbiLRML855i9Mlwnq54H8aNilvoTmlEDB7_QWuYnGGyoFS0aDZPBCMVPr6Z_wk5dl37FObhVPfisa5e_r4GEcQoWJsycEO3gMnasWy3zKAIODB8V4qIFXbpixXcVRoeSzdoQ0qe-ozNcHGcM562jSIgT_oSrXrUfrp9yfdOpyOaM645ByfSTAu-unS4N0V9sEugio19Luewd5MWrlTEaqyseZ9VUWydEXXbfBr2WEg1kVVHNLk84x_W9s-ghjxrrQAdWMxwVcFSzF7KgabtF6PHjgHrnf27DIBwshAm-GaUAEcrtDzS0C1RcdsCuW2MpV1oBuc4OlcdIqdGKYjZrwrezuXjeIhkqyzk7_JE_n8vt4QWyj8ZqI8V-UQDk3yeMKb0MEwSPtAifVTDTnBLSq1RhRtewClXvFqGkMnc0biRyRPOGiYC8nsp5i1IfxeFwviVSwyESyNfL2m2e_ZpMrLY2WIKjYWKKBg5n8oXawlTojYtSM-2b0yu37nsB8vuacd-T7l5htD5mj9ATru8WOK08KSVlztXqGqpoe-lbi9dWZMbdQ-WKmpG_r7OMX5_CQcCdqH0QghH346inIT3GmFx3hfPXqs8RrPmZgsieeteOLBUlJuai4Hsb992kSLcEilpPaXFDjyo0aDYd7Swx5plJMbYumX3lt4BoAMnmqL1DB3lX3l5-JDobi-rK_aeP_CAX6AJad2NtD6TACde50BbAXv-ZyWZ-KTkoHj9l0Mg5occE9JghGuLpIFqMfKfFANycM4wck5_aLaA3tm6Kee7bgNThd5xOayjTecX96XySeD8kSnTWBJRne0YtBJxBOTHT72sAWE7e9AxnYrPUW5Ov-50jmET9zfs8rnJIAZThbiK_wCe7Zd6sS1EafQvXLsOKeSY3veRUb6_a1Hty-tUMzmJvPlavM7wSsV97LS6eqlHaZBLCYxQCpZEGs_IYtxXYCoPhJ4eTd5P1VXnH4YKxiGTPPbsqdFMGC1JHElibp1PXO1E_fvtegLoUQ3o5K7SKunNLmQF2fv9LBAqVRiXijQ4PsSfzBeEy_R6eqtX9_DSH8CB3aRSXrEoQ3iK930x8Jw",
        //시커스2
        "https://lh3.googleusercontent.com/fife/ALs6j_HlY5fdWiPyV5DTgTxRTcpiRQOKWs_66Fqn0JSFDMprFOEDEemfvrffLpVS13rzC6zyAkufLRQfz3Ar_Rfi1oW3IZ6nF-UCum5cfYSCzYFX_JLBBY57uke4PGOlU-KKIDjBKB7sXueqKoqKf8sQaERqws7MHUWg0Phk3puuw6zHWa-KbmxPjSlPnC5v4v2dr_2l6BAXHdnVNhirA5arkm5Ar0VNmTONtHabQSxUdU_RpS8L1GWwnoctON6iK8DxKQ41uLEIc-T_7jbw7EttX9No80jVU46FgFd75HuaggjPpVl6ry4W4KUX4eBkJY066VCG5YEH18Tc-q9qbKCaL1M9mIOHVWtJR6wjIvNVwenqr5ROz8greuoGySzVCmcBxfLVMefya4T1pG4CTLmhj1FjttIkTtmstnE6eicxOYVcK8aTIbMve8f_GWrGHnhLN0SI6uTFZuJh7z6E5Yvkhd2BeahVMtkwJFOkdO0zZH6n-WWWBCsYVf1fp49vyfp-k0561-nPPSyWvEzZeqFk4IDJxoHmngkr8ibYSgYjYgQaiU2EPsKfFPsP1bO5ntZGnoDSVlHv2OEhwDFFp3NldHzdNBBtPAOExJgijqh55_Mukue8K89N2Y7-xdv2GIvMsA-ny1Ok1C_hosR1XGv2M5JFhU8_sqdwEYZkaNWSx2PpzGXssPdqg3DW-Kc7Q58WxCn7waIbDdVYQnYh9OvwbORmKrdK-lPZjq2nH2kGMNrWVCJR6lHK9GqzzbOrJnBHwh8AUyl-uzzntT_5hzajfh5H484cElrJ5oxeRc8NwPvgTIyGoUi7TeHZx2w3kfpthnQKHI5sHNx673QqQMy5pyLJYckWVaimTWvNOVB_p2ORckRS9Nhsu-zhk9y4UvN-NfR-OtA8lPHmi6t28iZD4kPnUWMk_MlO-xSztqLbcAy1ASAQXTiHs2uPgcCyf48rwZQlCApVry9YpZJvGhfAaGeT3a0de7YeBC_rbXprt884MGeugJ5f64oQuRrDQfcopQx7dbqXEI39H8SeccRniitTGwVJdWK7sen0yXiiPKZXzoVL_eyN33Omu89IfFm-VeTXgJEffdgj0ZJrpt3Y9xlKmA5zmQtDpPJPPuQuJ816O0LG1rpzDwfmD2rSCD7tkhdK2MK-CHpD0AohbbuR3YzupKvqMsyWTwjC1JOdPtiDlLxjRh_d4E8Rir5IxyqEyWNGSqDCv6mtgtZ66PJ1w3rZgBHVuJhp-Zc2QxqwTyNjcb4iOgkQEWtv8i2Dfkyjh8AtytQfoHqFz0ZnelLPsObg5rgDFC-p06qwUgFn4KNNG6Y2mW_TEMllFJE99sxwcbYGY-RrPvRBDB1F4DGvYNXrPkve-m9AzDchXhJBU0CUaWrURqKflkhdjgm-TBiiOOnVnFW4Sj1-5vZet-BnP72ZWuJFAqY9iPqLooGgvtcboOG5EiJd8E6qxww0jymAWo52T8X1NzajMg_YLg98KiuSTXLMqkrP0xzys8S08DeihrhWSMnR9xgLTS3TdnqYG-73KXCs5AoCYLD7209Bhnh55IJ-AUrYWVsJqlqnXhgsHbxf1PUC0fmxn-ezPL3j"
        
    ];

    popupData = [
        //시커스1
        { text: "2024 SEEKERS SUMMER CONCERT TICKET\n티켓 가격 : 7,000원\n티켓 오픈 일시 : 2024.06.24 (월) 18:00", link: "https://everytime.kr/374660/v/347522024" },
        //파동1
        { text: "중앙대학교 × 공간파동 《잃어버린 순간들》\n당신은 어떤 순간을 잃어버렸고,\n또 그것을 찾기 위해 무엇을 할 것인가?", link: "https://naver.com" },
        //내리디깅1
        { text: "내리디깅 디제잉 파티에 여러분을 초대합니다.\n공사 기간 : 3월 7일(금) 8:00pm~12:00am\n공사 범위 : 올빼미", link: "https://example.com/3" },
        //시커스2
        { text: "안녕하세요. 경인교대 ST.7, 명지대 화이트홀스,\n서울과기대 세마치, 중앙대 씨커스와 함께 준비한\n연합공연 “청춘일화”에 여러분을 초대합니다.", link: "https://example.com/4" }
    ];

    for (let i = 0; i < urls.length; i++) {
        images[i] = loadImage(urls[i]);
        popupImage[i] = loadImage(popupurls[i]);
    }

    titleImage = loadImage("https://lh3.googleusercontent.com/fife/ALs6j_FKQYzRMrSkkrP4Sr-2B8SbFonjtHuGnwnSiI9F9qeE_N0c0S-pO4Xr7Zs5wehxSeRFpSc0tDliww_WdZhFO83RxphmeLitui865kwtLiaOxuJUU2wbE4zz5FDC3RtPeysF2Pz_Ee_twhW0aVtda_8-RatZcFx-O0_70ErFflL0rNwa6XFGVdu7xh-aht6NSTHuOmNF6TpxBaYCVeAbfYZVcHexQUqON0C87hIBQwQQZrpHbB4gU5IUrJiysrtFFGFfi78JYU_NKiJk9QQQNAxLz9I-6ZZuBuLN9BbeCP-kPKnyumMcDqbfntg4wni8WDKPLsDB3TDD0OI4R1X6Pbb9qD3j0AopKfqN_OTgeyu5JSQRu0R7HgzXSZWxyQtvh8DVixr9ga7uO10xstyFDLu9Hf3kRZSgvZmKprIg5uVS1n-oN3sMwKqsWat78tCxmzoJZaJHTYoXPPiofWI2IX4JTHG-3aeAf0kx1trAX1dMA9xEd2hL8WROCmdov6fhugdhKfdzKbBoyWzs-p-SEriyjqFo3gjYMA9sEbqD-ynYjlUwZDqMn1udRXZdSzfhnVem2yGEKdmQPkIjpjCFS1mR7uy1pZJHLrg-HuyeEeHpMe8n-UbI-FLE0ti_uLc7t-7bAnl0NTBQ_kvtUD_oGIoMq24qOHXdFOSHLMgTFLGYPM22T3oSI24Un_KKn2WN83-yAytJTtR7ejpmEAF-U8YLq9yfZAeQnhI_gJJjkecgGMHrQVCYctejoyGvopMq1EIeg9hFhzQep0CIQy-PH62xvAzZp3js1v8gCGT4oiBHZ7WLiH-DD6XuCgTrp3x10yus1AKrX51nCE7LQSPfY5hpUtBH4ndSqw1CDgk5bFQpVDJzM7nM5b3OW8rlhrT-4X9xsg-_aXexMvLwS0Fh8xpY--BrZtOEZ7yRHKruw6mPuBd5zuOv71XNsH-dwfhtGVSzU4yLWfqvCc_7gg-Ximr10ruNTc_j5TLqTXHRtgDuH1Wmbs64ESCd4QLI7yyconcYyZ5KLHnu4sGOtw9Qbx7fpPLbwXtXSDb7OiRYtR0y1RF4pYLM3Ryxa0D1ra34hXF0enRLk7tJGNV7QZ3xRP0GnP5SAbVAm6J3A3Z719LA-G76aBNqshhJcA6RBs3fsRFBk2yNzM2wlD_7AMWnhvSes3FXKG6OAvda0owdkyoWHYFXRDy6KKp1T5Dc-tjtir2sDje6e10xC4di6bPlqxNCDpI51ixMOc8iyTR-toji18SYDE-YsdEcoL7AaM2xCHjs1xtQScY4VjL9HIbSeEn_YUnLxast-PaM-BGodNXhsnTyYiNNUeskti68qQHmfq6lBdE6JP4e0SYpguXVyisiq6gHPdLJpUf9m_1aBjRgXmRHHvb8BWsmUj-S5qJcPnAA63d6PKMHOYNJE3_DatNhnoxqhvSQ4ee0NwkxxRneKBSxMLBWVjh4JHGLlFJBCbe5j-uyvskm5nrDVUSvLrpW_RfFekU_vdgXi-gVaOQnVJmsqwslZsl_t-zjmxmZ3jwrwBCmwmqZLEmjMZodQjKStgUchf0n4_2mIaw1LrDWUxN8_-YmuHmn25RL6BmUYUY-WvUfE0kuT4Y9Zhw3uwZ8-Fo4rBIyac6YfVqCY3WRcsVBhYN6YTPgCiN7uc-29hTEF63m7bUquT2A1urnHZs59sc=w2560-h1186");
}

function setup() {
    createCanvas(360, 640);
    textAlign(CENTER, CENTER);
    textSize(14);
    viewStartTime = millis();

    // 업로드 버튼 (초기에는 숨겨짐)
    uploadBtn = createFileInput(handleFile);
    uploadBtn.position(100, 560);
    uploadBtn.hide(); 
}

function draw() {
    background(255);

    if (currentPage === "slider") {
        drawSliderPage();
        uploadBtn.hide();
    } else if (currentPage === "upload") {
        drawUploadPage();
        uploadBtn.show();
    }

    drawSwitchButton(); // 상단 전환 버튼 공통
}

function drawSliderPage() {
    drawArrows();

    noStroke();
    fill(249, 249, 249);
    rect(0, 0, 70, 360 * 0.15);

    let c1 = color('#F9F9F9');
    let c2 = color('#13757B');
    let startX = 70;
    let endX = 360;

    for (let x = startX; x <= endX; x++) {
        let inter = map(x, startX, endX, 0, 1);
        let c = lerpColor(c1, c2, inter);
        stroke(c);
        line(x, 0, x, 360 * 0.15);
    }

    fill(255);
    textSize(15);
    textStyle(BOLD);
    text("중앙인들을 위한, 누구보다 가까운 예술", 215, 360 * 0.15 * 0.5);

    if (titleImage) {
        imageMode(CENTER);
        image(titleImage, 36, 360 * 0.15 * 0.5, 48, 48);
    }

    animation();
    popup();
    edge();
}

function drawUploadPage() {
    fill('#13757B');
    stroke(0);
    rect(20, 20, 140, 100, 5);
    fill(255);
    noStroke();
    text("(날씨와 시간표를 \n토대로 컨텐츠 추천)", 90, 70);

    fill('#13757B');
    stroke(0);
    rect(200, 20, 140, 100, 5);
    fill(255);
    noStroke();
    text("날짜 출력 박스", 270, 70);

    fill('#13757B');
    stroke(150, 0, 150);
    rect(20, 140, 320, 400, 30);
    fill(255);
    noStroke();
    text("사용자가 사진을 추가하면\n그 사진을 출력해주는 박스", 180, 240);

    if (uploadedImage) {
        imageMode(CENTER);
        image(uploadedImage, 180, 340, 260, 320);
    }

    edge();
}

function drawSwitchButton() {
    fill('#13757B');
    noStroke();
    rect(10, 600, 120, 30, 10);
    fill(255);
    textSize(14);
    if (currentPage === "slider") {
        text("업로드 페이지 →", 70, 615);
    } else {
        text("← 돌아가기", 70, 615);
    }
}

function mousePressed() {
    // 페이지 전환 버튼 클릭
    if (mouseX > 10 && mouseX < 130 && mouseY > 600 && mouseY < 630) {
        if (currentPage === "slider") {
            currentPage = "upload";
        } else {
            currentPage = "slider";
        }
        return;
    }

    if (currentPage !== "slider") return;

    if (popupVisible) {
        let textY = height / 2 + popupImage[currentIndex].height / 8 + 10;
        if (mouseX > width / 2 - 100 && mouseX < width / 2 + 100 &&
            mouseY > textY && mouseY < textY + 48) {
            window.open(popupData[currentIndex].link, "_blank");
            return;
        }
        popupVisible = false;
        viewStartTime = millis();
        return;
    }

    if (transitioning) return;

    if (mouseX > 30 && mouseX < 50 && mouseY > height / 2 - 20 && mouseY < height / 2 + 20) {
        targetIndex = (currentIndex - 1 + images.length) % images.length;
        direction = 1;
        transitioning = true;
    }

    if (mouseX > width - 50 && mouseX < width - 30 && mouseY > height / 2 - 20 && mouseY < height / 2 + 20) {
        targetIndex = (currentIndex + 1) % images.length;
        direction = -1;
        transitioning = true;
    }
}

function handleFile(file) {
    if (file.type === 'image') {
        uploadedImage = loadImage(file.data, () => {
            console.log("이미지 로드 완료!");
        });
    } else {
        uploadedImage = null;
    }
}

function drawArrows() {
    fill('#13757B');
    noStroke();
    triangle(30, height / 2, 50, height / 2 - 20, 50, height / 2 + 20);
    triangle(width - 30, height / 2, width - 50, height / 2 - 20, width - 50, height / 2 + 20);
}

function edge() {
    stroke(0);
    strokeWeight(2);
    noFill();
    rect(0, 0, width, height);
}

function animation() {
    if (transitioning) {
        transitionX += 20 * direction;
        imageMode(CENTER);
        image(images[currentIndex], width / 2 + transitionX, height / 2, images[currentIndex].width / 4.5, images[currentIndex].height / 4.5);
        image(images[targetIndex], width / 2 + transitionX - direction * width, height / 2, images[targetIndex].width / 4.5, images[targetIndex].height / 4.5);
        if (abs(transitionX) >= width) {
            currentIndex = targetIndex;
            transitionX = 0;
            transitioning = false;
            viewStartTime = millis();
        }
    } else {
        imageMode(CENTER);
        image(images[currentIndex], width / 2, height / 2, images[currentIndex].width / 4.5, images[currentIndex].height / 4.5);
    }
}

function popup() {
    if (!transitioning && !popupVisible && millis() - viewStartTime > 2000) {
        popupVisible = true;
    }

    if (popupVisible) {
        push(); // 스타일 변경 전 상태 저장
    
        fill(0, 0, 0, 150);
        rect(0, 0, width, height);

        imageMode(CENTER);
        image(popupImage[currentIndex], width / 2, height / 2, popupImage[currentIndex].width / 4, popupImage[currentIndex].height / 4);

        fill(255);
        textSize(16);
        textAlign(CENTER, TOP); // 팝업 안에서만 적용
        let textY = height / 2 + popupImage[currentIndex].height / 8 + 10;
        text(popupData[currentIndex].text, width / 2, textY);

        // 버튼 하이라이트 (링크 영역)
        if (mouseX > width / 2 - 100 && mouseX < width / 2 + 100 &&
            mouseY > textY && mouseY < textY + 48) {
                cursor(HAND);
            } else {
                cursor(ARROW);
            }
            pop(); // 스타일 원상복귀
        } else {
                cursor(ARROW);
    }
}

