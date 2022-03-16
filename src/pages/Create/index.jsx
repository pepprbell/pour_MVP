import { useEffect, useState } from 'react'
import styles from './index.module.css'
import {
  Input, Select, Button
} from '../../components'

import { Amplify } from '@aws-amplify/core'
import { DataStore } from '@aws-amplify/datastore'
import { Audiobook, Ad, Dubbing } from '../../models'

function Create() {

  // 타입 옵션 지정

  const dubbing = [['TV 애니메이션', '극장 애니메이션', '특촬', '게임', '드라마 CD', '오디오드라마'],['배역 이름', '작품 이름'],['Character', 'Content'],['tv','theater','kamen','game','dramacd','audiodrama']]
  const short = [['단역'],['배역 이름', '작품 이름'],['Character', 'Content'],['short']]
  const foreign = [['외화'],['배역 이름', '작품 이름', '배우 이름'],['Character', 'Content', 'Actor'],['foreign']]
  const audiobook = [['오디오북'],['책 이름', '작가'],['Book', 'Author'],['audiobook']]
  const ad = [['광고'],['광고 이름'],['Ad'],['ad']]

  // const book = ['드래곤 라자 1부: 태양을 향해 달리는 말', '드래곤 라자 2부: 주전자와 머리의 비교', '아몬드', '작가들의 비밀스러운 삶', '데일 카네기 인간관계론', '데일 카네기 자기관리론', '상처 받고 싶지 않은 내일', '가족의 두 얼굴 (사랑하지만 상처도 주고받는 나와 가족의 심리테라피)', '댓글왕 곰손 선생님', '비차를 찾아라', '어른아이로 산다는 것', '나의 숲을 지켜 줘', '1의 들러리', '우주로 가는 계단', '세븐 블라인드', '그날 아이가 있었다', '프랑켄슈타인과 철학 좀 하는 괴물', '류연웅 단편선(세트)', '다윈에게 직접 듣는 종의 기원 이야기', '봄비 내리는 날', '601호 재판관', '[중편] 성장', '[중편] 봄비 내리는 날', '공황장애가 시작되었습니다', '쌈룡학원', '[단편] 번지점프를 하다', '어린이를 위한 우리 땅, 독도 이야기', '프랑스식 세탁소', '민주를 지켜라', '[단편] 프랑스식 세탁소', '다시 만난 지구', '[단편] 소년처럼', '[단편] 파견 근무', '[중편] 그 무더웠던 여름날의 꿈', '심심 할매의 명심보감 레시피', '[단편] 타인의 삶', '[단편] 남쪽 절', '꾸무스따 까! 나는 조선인입니다', '어쨌든 무조건 반드시 꼭 하늘을 날 거야', '[단편] 울게 놔두세요', '총칼로 빼앗을 수 없는 것', '팝콘 전쟁', '훌렁 쓰고 훌러덩 벗는 요술 망태기', '후루룩후루룩 콩나물죽으로 십 년 버티기', '호랑이를 물리친 재투성이 재덕이', '한 자, 두 자 , 금 자로 아버지를 살려 낸 아들', '빤짝빤짝 꾀돌이 막둥이', '돌고 돌아 되돌아온 은혜', '꽁꽁 가둬 둔 이야기 귀신', '321', '고양이 빌라', '귀신 님! 날 보러 와요!', '궁금해! 나는 어떻게 태어났을까?', '응가공주', '알롱이의 기도', '[공룡나라 친구들] 겁이 많은 티라노 사우루스', '할머니의 용궁 여행', '노란 주전자', '[공룡나라 친구들] 잠들지 못하는 이구아노돈', '나의 작고 커다란 아빠', '반쪽섬', '[공룡나라 친구들] 참견하기 좋아하는 브라키오사우루스', '[공룡나라 친구들] 자기밖에 모르는 플라테오사우루스', '102층 괴물 아파트', '[공룡나라 친구들] 엉뚱한 생각만 하는 디플로도쿠스', '똥 마려워!', '[공룡나라 친구들] 친구가 보고 싶은 스테고사우루스', '[공룡나라 친구들] 이가 너무 아픈 알로사우루스', '[공룡나라 친구들] 알을 주운 프시타코 사우루스', '[공룡나라 친구들] 꼬리 곤봉이 싫은 안킬로사우루스', '[공룡나라 친구들] 항상 급한 벨로키랍토르', '[공룡나라 친구들] 친구가 없는 스피노 사우루스', '에너지충전', '바퀴 달린 수박', '풍선 사냥꾼', '내게 그 책을 읽어 줄래요?', '구멍을 주웠어', '장갑', '막스와 마르셀', '할머니 어디 있어요?', '너, 그러다가!', '야호! 수박', '상해임시정부', '독도 고래 외뿔이', '도깨비폰을 개통 하시겠습니까', '두 번째 엔딩', '와이파이를 먹어버린 펄럭바지들', '말라깽이 돼지 애니', '사과나무밭 달님']
  // const author = ['이영도', '이영도', '손원평', '기욤 뮈소', '데일 카네기', '데일 카네기', '심규진', '최광현', '양승현', '정명섭', '지민석', '윤혜숙', '김선희', '전수경', '김선희 외 6인', '윤숙희', '문명식', '류연웅', '박성관', '김한수', '박현숙', '김한수', '김한수', '정윤진', '채록희', '정미경', '신현배', '정미경', '신여랑 외 4인', '정미경', '정명섭 외 3인', '정미경', '정미경', '김한수', '고향숙 외 1인', '정미경', '정미경', '이상미', '강이비', '정미경', '김기정', '류연웅', '박혜선', '이묘신', '한상순', '오미경', '정진아', '이종선', '문영숙', '마리 칸스타 욘센', '김이삭', '진수경', '양승현', '박정희 글 / 박세연 그림', '양정숙', '프랜 브로매지', '권민조', '최일순', '캐서린 비치', '마리 칸스타 욘센', '이새미', '캐서린 비치', '캐서린 비치', '백명식', '프랜 브로매지', '조숙경', '캐서린 비치', '캐서린 비치', '캐서린 비치', '프랜 브로매지', '프랜 브로매지', '캐서린 비치', '박종진', '김숙분', '안니켄 비에르네스 외 1인', '디디에 레비 외 1인', '켈리 캔비', '로마나 로마니신 외 1인', '알리스 메테니에', '안은영', '홍하나', '박혜선', '정명섭', '장석주', '박하익', '김려령 배미주 이현 김중미 손원평 구병모 이희영 백온유', '박은숙', '조찬양', '권정생']
  // const date = ['2022-01-17', '2022-01-17', '2019-07-16', '2019-11-22', '2020-04-01', '2021-03-08', '2019-01-03', '2020-12-24', '2019-11-06', '2021-11-24', '2018-12-06', '2020-12-08', '2019-11-06', '2021-09-08', '2020-12-23', '2019-11-06', '2020-10-15', '2020-06-16', '2020-12-14', '2020-04-20', '2020-12-08', '2020-04-20', '2020-04-20', '2021-08-17', '2021-09-08', '2020-04-21', '2021-08-25', '2020-04-21', '2021-08-18', '2020-04-20', '2021-08-30', '2020-04-21', '2020-04-21', '2020-04-20', '2020-10-15', '2020-04-21', '2020-04-21', '2021-09-14', '2021-09-08', '2020-04-21', '2021-09-27', '2020-06-16', '2019-11-06', '2019-11-06', '2019-11-06', '2019-11-06', '2019-11-06', '2019-11-06', '2019-11-06', '2021-02-10', '2021-03-02', '2020-12-15', '2019-11-06', '2020-12-15', '2021-03-02', '2020-09-22', '2020-12-15', '2021-03-02', '2020-09-22', '2021-02-10', '2019-11-06', '2020-09-22', '2020-09-22', '2021-03-02', '2020-09-22', '2019-11-06', '2020-09-22', '2020-09-22', '2020-09-22', '2020-09-22', '2020-09-22', '2020-09-22', '2019-11-06', '2021-03-02', '2021-02-10', '2021-02-10', '2019-11-06', '2021-02-10', '2021-02-10', '2019-08-01', '2019-11-06', '2019-11-06', '2020-12-07', '2021-10-12', '2021-09-08', '2021-09-08', '2021-10-12', '2021-09-10', '2020-04-21']
  // const link = ['https://audioclip.naver.com/audiobooks/4FDE1614F9', 'https://audioclip.naver.com/audiobooks/22F986463E', 'https://audioclip.naver.com/audiobooks/B07205E56A', 'https://audioclip.naver.com/audiobooks/34CB7A1B43', 'https://audioclip.naver.com/audiobooks/6B7AEB4AD1', 'https://audioclip.naver.com/audiobooks/C7F76AAC59', 'https://audioclip.naver.com/audiobooks/B36667044C', 'https://audioclip.naver.com/audiobooks/4B5373046D', 'https://audioclip.naver.com/audiobooks/400F2B429E', 'https://audioclip.naver.com/audiobooks/7E32F61BF6', 'https://audioclip.naver.com/audiobooks/97F19D3F03', 'https://audioclip.naver.com/audiobooks/7EF8680DFC', 'https://audioclip.naver.com/audiobooks/1A86CC71C3', 'https://audioclip.naver.com/audiobooks/04EF426D86', 'https://audioclip.naver.com/audiobooks/E6778F096E', 'https://audioclip.naver.com/audiobooks/E878138AB9', 'https://audioclip.naver.com/audiobooks/CF147A5A0C', 'https://audioclip.naver.com/audiobooks/93FE4CC7C5', 'https://audioclip.naver.com/audiobooks/11505D2F5E', 'https://audioclip.naver.com/audiobooks/58A26CAC8A', 'https://audioclip.naver.com/audiobooks/2A80A6E2EB', 'https://audioclip.naver.com/audiobooks/50D929E907', 'https://audioclip.naver.com/audiobooks/06820300EC', 'https://audioclip.naver.com/audiobooks/3900367CBE', 'https://audioclip.naver.com/audiobooks/16539195B0', 'https://audioclip.naver.com/audiobooks/35C7284142', 'https://audioclip.naver.com/audiobooks/55F634A6B2', 'https://audioclip.naver.com/audiobooks/4B4D01881F', 'https://audioclip.naver.com/audiobooks/F51A30A5B7', 'https://audioclip.naver.com/audiobooks/7FA89C9750', 'https://audioclip.naver.com/audiobooks/28FB9E30CF', 'https://audioclip.naver.com/audiobooks/FCA644FB0D', 'https://audioclip.naver.com/audiobooks/BDC785D164', 'https://audioclip.naver.com/audiobooks/C67BF92A67', 'https://audioclip.naver.com/audiobooks/4A97D976D7', 'https://audioclip.naver.com/audiobooks/5B10234D67', 'https://audioclip.naver.com/audiobooks/71214E7701', 'https://audioclip.naver.com/audiobooks/81F24A36F6', 'https://audioclip.naver.com/audiobooks/6511ED1174', 'https://audioclip.naver.com/audiobooks/901A102A69', 'https://audioclip.naver.com/audiobooks/D47989A358', 'https://audioclip.naver.com/audiobooks/995371DA99', 'https://audioclip.naver.com/audiobooks/08F3F3B540', 'https://audioclip.naver.com/audiobooks/29877A490F', 'https://audioclip.naver.com/audiobooks/FA27CE2D0A', 'https://audioclip.naver.com/audiobooks/04622F0BC2', 'https://audioclip.naver.com/audiobooks/1CCB813053', 'https://audioclip.naver.com/audiobooks/00987E2292', 'https://audioclip.naver.com/audiobooks/30E31DDA43', 'https://audioclip.naver.com/audiobooks/9616D3624A', 'https://audioclip.naver.com/audiobooks/9DED1C0AE5', 'https://audioclip.naver.com/audiobooks/30D8C59A55', 'https://audioclip.naver.com/audiobooks/CBF262BD97', 'https://audioclip.naver.com/audiobooks/748FD8120D', 'https://audioclip.naver.com/audiobooks/A8EFA9E540', 'https://audioclip.naver.com/audiobooks/D468D2508A', 'https://audioclip.naver.com/audiobooks/81948D80BB', 'https://audioclip.naver.com/audiobooks/D7D094DAB2', 'https://audioclip.naver.com/audiobooks/6433BD5135', 'https://audioclip.naver.com/audiobooks/6B809493D4', 'https://audioclip.naver.com/audiobooks/4B14816F34', 'https://audioclip.naver.com/audiobooks/0B289EFB76', 'https://audioclip.naver.com/audiobooks/6866C7DA0E', 'https://audioclip.naver.com/audiobooks/8E12B573B7', 'https://audioclip.naver.com/audiobooks/D722ED8D30', 'https://audioclip.naver.com/audiobooks/50A55141B7', 'https://audioclip.naver.com/audiobooks/1795A2547E', 'https://audioclip.naver.com/audiobooks/B203403A46', 'https://audioclip.naver.com/audiobooks/D93D4DAA02', 'https://audioclip.naver.com/audiobooks/6489229C4A', 'https://audioclip.naver.com/audiobooks/449B925444', 'https://audioclip.naver.com/audiobooks/364F088706', 'https://audioclip.naver.com/audiobooks/C04FDE4F51', 'https://audioclip.naver.com/audiobooks/D5F027A9BA', 'https://audioclip.naver.com/audiobooks/C210771B37', 'https://audioclip.naver.com/audiobooks/3351922DE7', 'https://audioclip.naver.com/audiobooks/CB3CEB88FB', 'https://audioclip.naver.com/audiobooks/11535D1A28', 'https://audioclip.naver.com/audiobooks/5BBC6A26D5', 'https://audioclip.naver.com/audiobooks/6FCCDE2895', 'https://audioclip.naver.com/audiobooks/CCE5EC00B8', 'https://audioclip.naver.com/audiobooks/DEDD30A34E', 'https://audioclip.naver.com/audiobooks/0994195686', 'https://audioclip.naver.com/audiobooks/1CAB1CE4AB', 'https://audioclip.naver.com/audiobooks/2B3DDE901A', 'https://audioclip.naver.com/audiobooks/F8D5E05685', 'https://audioclip.naver.com/audiobooks/09AC69ADEC', 'https://audioclip.naver.com/audiobooks/E29F860176', 'https://audioclip.naver.com/audiobooks/A02E9F8E55']
  // const image = ['https://audio-phinf.pstatic.net/20220117_149/16423853188956YJ9D_JPEG/%B5%E5%B7%A1%B0%EF_%B6%F3%C0%DA_%BF%C0%B5%F0%BF%C0%BA%CF_%C3%D6%C1%BE_%C7%A5%C1%F62.jpg?type=a144', 'https://audio-phinf.pstatic.net/20220117_276/1642385295960z8biM_JPEG/%B5%E5%B7%A1%B0%EF_%B6%F3%C0%DA_%BF%C0%B5%F0%BF%C0%BA%CF_%C3%D6%C1%BE_%C7%A5%C1%F61.jpg?type=a144', 'https://audio-phinf.pstatic.net/20190716_185/156325343590789uW8_JPEG/9788936468439_w1125.jpg?type=a144', 'https://audio-phinf.pstatic.net/20191120_104/1574246711367nvSSM_PNG/%BF%C0%B5%F0%BF%C0%BA%CF_%BB%E7%C0%CC%C1%EE_%C1%B6%C0%FD%BF%EB.png?type=a144', 'https://audio-phinf.pstatic.net/20200518_223/1589779346271AglO0_PNG/%C4%AB%B3%D7%B1%E2_%B6%EC%C1%F6new.png?type=a144', 'https://audio-phinf.pstatic.net/20210305_42/1614921997848PwVIn_JPEG/%B5%A5%C0%CF%C4%AB%B3%D7%B1%E2_%C0%DA%B1%E2%B0%FC%B8%AE%B7%D0_%C7%A51.jpg?type=a144', 'https://audio-phinf.pstatic.net/20190102_213/1546409673197keILH_JPEG/%BB%F3%C3%B3_%B9%DE%B0%ED_%BD%CD%C1%F6_%BE%CA%C0%BA_%B3%BB%C0%CF.jpg?type=a144', 'https://audio-phinf.pstatic.net/20210426_87/16194057636930t5po_JPEG/9788960518278.jpg?type=a144', 'https://audio-phinf.pstatic.net/20191104_15/1572850323169uNOHy_JPEG/%B4%F1%B1%DB%BF%D5_%B0%F5%BC%D5_%BC%B1%BB%FD%B4%D4.jpg?type=a144', 'https://audio-phinf.pstatic.net/20211122_61/1637563684997i3GnV_JPEG/9788955883879_cover.jpg?type=a144', 'https://audio-phinf.pstatic.net/20181129_19/1543487042067BQgEe_JPEG/%BE%EE%B8%A5%BE%C6%C0%CC%B7%CE%BB%EA%B4%D9%B4%C2%B0%CD.jpg?type=a220', 'https://audio-phinf.pstatic.net/20201208_82/16073920060635lCNy_JPEG/%B3%AA%C0%C7_%BD%A3%C0%BB_%C1%F6%C4%D1_%C1%E0.jpg?type=a220', 'https://audio-phinf.pstatic.net/20191104_262/1572849862980k0A9N_JPEG/1%C0%C7_%B5%E9%B7%AF%B8%AE.jpg?type=a220', 'https://audio-phinf.pstatic.net/20210907_183/1631000441814ROKTE_JPEG/9788936498016_cover.jpg?type=a220', 'https://audio-phinf.pstatic.net/20201223_112/1608689537102SxGCS_JPEG/%BC%BC%BA%EC_%BA%ED%B6%F3%C0%CE%B5%E5.jpg?type=a220', 'https://audio-phinf.pstatic.net/20191104_2/1572848972894c8oVO_JPEG/%B1%D7%B3%AF_%BE%C6%C0%CC%B0%A1_%C0%D6%BE%FA%B4%D9.jpg?type=a220', 'https://audio-phinf.pstatic.net/20201014_91/1602656504696RLd6e_JPEG/9791190275224_cover.jpg?type=a220', 'https://audio-phinf.pstatic.net/20200616_95/1592270150761Iraq8_JPEG/9791190174046.jpg?type=a220', 'https://audio-phinf.pstatic.net/20201211_34/1607675251643F6iB5_JPEG/9791190275323_cover.jpg?type=a220', 'https://audio-phinf.pstatic.net/20200316_138/1584352656497jVNnG_JPEG/9788936487591_frontcover.jpg?type=a220', 'https://audio-phinf.pstatic.net/20201208_107/1607388910363Um5rD_JPEG/601%C8%A3_%C0%E7%C6%C7%B0%FC.jpg?type=a220', 'https://audio-phinf.pstatic.net/20200316_244/1584352676958O3g77_JPEG/9788936487607_frontcover.jpg?type=a220', 'https://audio-phinf.pstatic.net/20200316_54/15843526974770gF4N_JPEG/9788936487614_frontcover.jpg?type=a220', 'https://audio-phinf.pstatic.net/20210813_275/1628836440266jXodg_JPEG/9791190893862.jpg?type=a220', 'https://audio-phinf.pstatic.net/20210907_219/1630989567793gtrPY_JPEG/9791190275606_cover.jpg?type=a220', 'https://audio-phinf.pstatic.net/20200316_131/15843514051202Kq61_JPEG/9788936468903_frontcover.jpg?type=a220', 'https://audio-phinf.pstatic.net/20210823_87/1629686106779zgVYd_JPEG/9788969023339.jpg?type=a220', 'https://audio-phinf.pstatic.net/20200316_191/1584351302220hx5L2_JPEG/9788936468859_frontcover.jpg?type=a220', 'https://audio-phinf.pstatic.net/20210813_266/16288405435594mTSO_JPEG/9791190893879.jpg?type=a220', 'https://audio-phinf.pstatic.net/20200316_261/1584351446175jqdED_JPEG/9788936468927_frontcover.jpg?type=a220', 'https://audio-phinf.pstatic.net/20210827_35/16300407273102b7OB_JPEG/%B4%D9%BD%C3%B8%B8%B3%AD%C1%F6%B1%B8_%C7%A5%C1%F6.jpg?type=a220', 'https://audio-phinf.pstatic.net/20200316_225/15843514257582o3V9_JPEG/9788936468910_frontcover.jpg?type=a220', 'https://audio-phinf.pstatic.net/20200316_262/1584351343235mk501_JPEG/9788936468873_frontcover.jpg?type=a220', 'https://audio-phinf.pstatic.net/20200316_222/1584352717973o0XiM_JPEG/9788936487621_frontcover.jpg?type=a220', 'https://audio-phinf.pstatic.net/20201014_130/1602665205423GYFlk_JPEG/9788955889598_cover.jpg?type=a220', 'https://audio-phinf.pstatic.net/20200316_127/1584351384377YaBka_JPEG/9788936468897_frontcover.jpg?type=a220', 'https://audio-phinf.pstatic.net/20200316_204/1584351322691IQaK1_JPEG/9788936468866_frontcover.jpg?type=a220', 'https://audio-phinf.pstatic.net/20210913_210/1631510907831PcMqY_JPEG/%B2%D9%B9%AB%BD%BA%B5%FB_%B1%EE_%B3%AA%B4%C2_%C1%B6%BC%B1%C0%CE%C0%D4%B4%CF%B4%D9.jpg?type=a220', 'https://audio-phinf.pstatic.net/20210908_102/1631073299768VbAiX_JPEG/9791163270867_cover.jpg?type=a220', 'https://audio-phinf.pstatic.net/20200316_166/1584351363867mRHRk_JPEG/9788936468880_frontcover.jpg?type=a220', 'https://audio-phinf.pstatic.net/20210927_120/16327274120971YKGO_JPEG/9791185237527_cover.jpg?type=a220', 'https://audio-phinf.pstatic.net/20200616_237/15922693410343S2ul_JPEG/9791196347093.jpg?type=a220', 'https://audio-phinf.pstatic.net/20191104_255/1572848608110v6Yhb_JPEG/%C8%C4%B7%E7%B7%E8%C8%C4%B7%E7%B7%E8_%C4%E1%B3%AA%B9%B0%C1%D7%C0%B8%B7%CE_%BD%CA_%B3%E2_%B9%F6%C6%BC%B1%E2.jpg?type=a220', 'https://audio-phinf.pstatic.net/20191106_14/1573001579520cbttI_JPEG/%C8%C4%B7%E7%B7%E8%C8%C4%B7%E7%B7%E8_%C4%E1%B3%AA%B9%B0%C1%D7%C0%B8%B7%CE_%BD%CA_%B3%E2_%B9%F6%C6%BC%B1%E2.jpg?type=a220', 'https://audio-phinf.pstatic.net/20191104_14/15728487281217LTcS_JPEG/%C8%A3%B6%FB%C0%CC%B8%A6_%B9%B0%B8%AE%C4%A3_%C0%E7%C5%F5%BC%BA%C0%CC_%C0%E7%B4%F6%C0%CC.jpg?type=a220', 'https://audio-phinf.pstatic.net/20191104_33/1572848787323Suvut_JPEG/%C7%D1_%C0%DA%2C_%B5%CE_%C0%DA%2C_%B1%DD_%C0%DA%B7%CE_%BE%C6%B9%F6%C1%F6%B8%A6_%BB%EC%B7%C1_%B3%BD_%BE%C6%B5%E9.jpg?type=a220', 'https://audio-phinf.pstatic.net/20191104_227/1572848671712KIcA5_JPEG/%B9%DD%C2%A6%B9%DD%C2%A6_%B2%D2%B5%B9%C0%CC_%B8%B7%B5%D5%C0%CC.jpg?type=a220', 'https://audio-phinf.pstatic.net/20191104_276/1572848849375liXCg_JPEG/%B5%B9%B0%ED_%B5%B9%BE%C6_%B5%C7%B5%B9%BE%C6%BF%C2_%C0%BA%C7%FD.jpg?type=a220', 'https://audio-phinf.pstatic.net/20191104_111/1572848910618Satfg_JPEG/%B2%C7%B2%C7_%B0%A1%B5%D6_%B5%D0_%C0%CC%BE%DF%B1%E2_%B1%CD%BD%C5.jpg?type=a220', 'https://audio-phinf.pstatic.net/20210210_232/16129134295248YC2p_JPEG/9788962193251_cover.jpg?type=a220', 'https://audio-phinf.pstatic.net/20210302_19/1614649361567rzyzF_JPEG/%B0%ED%BE%E7%C0%CC_%BA%F4%B6%F3.jpg?type=a220', 'https://audio-phinf.pstatic.net/20210903_151/1630653838915ekUHN_JPEG/%B8%AE%B4%BA%BE%F3_%C3%B5%B0%B3%C0%C7%B9%D9%B6%F7_%B1%CD%BD%C5_%B4%D4_%B3%AF_%BA%B8%B7%AF_%BF%CD%BF%E4_%C7%A5%C1%F6%28%BE%D5%29.jpg?type=a220', 'https://audio-phinf.pstatic.net/20191104_183/1572850659819jC7Ck_JPEG/%B1%C3%B1%DD%C7%D8_%B3%AA%B4%C2_%BE%EE%B6%BB%B0%D4_%C5%C2%BE%EE%B3%B5%C0%BB%B1%EE.jpg?type=a220', 'https://audio-phinf.pstatic.net/20201215_69/1607998512218xPIfr_JPEG/%C0%C0%B0%A1%B0%F8%C1%D6.jpg?type=a220', 'https://audio-phinf.pstatic.net/20210302_109/16146505564332MH8y_JPEG/%BE%CB%B7%D5%C0%CC%C0%C7_%B1%E2%B5%B5.jpg?type=a220', 'https://audio-phinf.pstatic.net/20200922_158/1600751172889zxeYp_JPEG/%B0%F8%B7%E6%B3%AA%B6%F3_%C4%A3%B1%B8%B5%E9_%B0%CC%C0%CC_%B8%B9%C0%BA_%C6%BC%B6%F3%B3%EB_%BB%E7%BF%EC%B7%E7%BD%BA.jpg?type=a220', 'https://audio-phinf.pstatic.net/20210906_229/1630912534338O2Y0c_JPEG/%B8%AE%B4%BA%BE%F3_%C3%B5%B0%B3%C0%C7%B9%D9%B6%F7_%C7%D2%B8%D3%B4%CF%C0%C7_%BF%EB%B1%C3_%BF%A9%C7%E0_%C7%A5%C1%F6%28%BE%D5%29.jpg?type=a220', 'https://audio-phinf.pstatic.net/20210302_183/1614649122101FYL3t_JPEG/%B3%EB%B6%F5_%C1%D6%C0%FC%C0%DA.jpg?type=a220', 'https://audio-phinf.pstatic.net/20200922_241/1600752089683DAYNL_JPEG/%B0%F8%B7%E6%B3%AA%B6%F3_%C4%A3%B1%B8%B5%E9_%C0%E1%B5%E9%C1%F6_%B8%F8%C7%CF%B4%C2_%C0%CC%B1%B8%BE%C6%B3%EB%B5%B7.jpg?type=a220', 'https://audio-phinf.pstatic.net/20210210_5/1612913831869ia8Dj_JPEG/9788962193268_cover.jpg?type=a220', 'https://audio-phinf.pstatic.net/20191104_237/1572850543363v5y8R_JPEG/%B9%DD%C2%CA%BC%B6.jpg?type=a220', 'https://audio-phinf.pstatic.net/20200922_50/16007517109314yOjk_JPEG/%B0%F8%B7%E6%B3%AA%B6%F3_%C4%A3%B1%B8%B5%E9_%C2%FC%B0%DF%C7%CF%B1%E2_%C1%C1%BE%C6%C7%CF%B4%C2_%BA%EA%B6%F3%C5%B0%BF%C0%BB%E7%BF%EC%B7%E7%BD%BA.jpg?type=a220', 'https://audio-phinf.pstatic.net/20200922_91/1600752310774LxX9P_JPEG/%B0%F8%B7%E6%B3%AA%B6%F3_%C4%A3%B1%B8%B5%E9_%C0%DA%B1%E2%B9%DB%BF%A1_%B8%F0%B8%A3%B4%C2_%C7%C3%B6%F3%C5%D7%BF%C0%BB%E7%BF%EC%B7%E7%BD%BA.jpg?type=a220', 'https://audio-phinf.pstatic.net/20210302_138/1614649720537mUJX7_JPEG/102%C3%FE_%B1%AB%B9%B0_%BE%C6%C6%C4%C6%AE.jpg?type=a220', 'https://audio-phinf.pstatic.net/20200922_242/16007519491073AetQ_JPEG/%B0%F8%B7%E6%B3%AA%B6%F3_%C4%A3%B1%B8%B5%E9_%BE%FB%B6%D7%C7%D1_%BB%FD%B0%A2%B8%B8_%C7%CF%B4%C2_%B5%F0%C7%C3%B7%CE%B5%B5%C4%ED%BD%BA.jpg?type=a220', 'https://audio-phinf.pstatic.net/20191104_121/1572848558548fRKiX_JPEG/%B6%CB_%B8%B6%B7%C1%BF%F6.jpg?type=a220', 'https://audio-phinf.pstatic.net/20200922_99/160075261985811uqq_JPEG/%BD%BA%C5%D7%C4%DA%BB%E7%BF%EC%B7%E7%BD%BA_1.jpg?type=a220', 'https://audio-phinf.pstatic.net/20200922_113/1600752996613BrcC0_JPEG/%B0%F8%B7%E6%B3%AA%B6%F3_%C4%A3%B1%B8%B5%E9_%C0%CC%B0%A1_%B3%CA%B9%AB_%BE%C6%C7%C2_%BE%CB%B7%CE%BB%E7%BF%EC%B7%E7%BD%BA.jpg?type=a220', 'https://audio-phinf.pstatic.net/20200922_202/1600753231111tsfLx_JPEG/%B0%F8%B7%E6%B3%AA%B6%F3_%C4%A3%B1%B8%B5%E9_%BE%CB%C0%BB_%C1%D6%BF%EE_%C7%C1%BD%C3%C5%B8%C4%DA_%BB%E7%BF%EC%B7%E7%BD%BA.jpg?type=a220', 'https://audio-phinf.pstatic.net/20200922_270/1600752869916Rs0AW_JPEG/%B0%F8%B7%E6%B3%AA%B6%F3_%C4%A3%B1%B8%B5%E9_%B2%BF%B8%AE_%B0%EF%BA%C0%C0%CC_%BD%C8%C0%BA_%BE%C8%C5%B3%B7%CE%BB%E7%BF%EC%B7%E7%BD%BA.jpg?type=a220', 'https://audio-phinf.pstatic.net/20200922_248/1600751530622Vwt1P_JPEG/%B0%F8%B7%E6%B3%AA%B6%F3_%C4%A3%B1%B8%B5%E9_%C7%D7%BB%F3_%B1%DE%C7%D1_%BA%A7%B7%CE%C5%B0%B6%F8%C5%E4%B8%A3.jpg?type=a220', 'https://audio-phinf.pstatic.net/20200922_15/16007531128895vQa5_JPEG/%B0%F8%B7%E6%B3%AA%B6%F3_%C4%A3%B1%B8%B5%E9_%C4%A3%B1%B8%B0%A1_%BE%F8%B4%C2_%BD%BA%C7%C7%B3%EB_%BB%E7%BF%EC%B7%E7%BD%BA.jpg?type=a220', 'https://audio-phinf.pstatic.net/20191104_126/1572850613360LzMEw_JPEG/%BF%A1%B3%CA%C1%F6%C3%E6%C0%FC.jpg?type=a220', 'https://audio-phinf.pstatic.net/20210302_43/1614650327264zIBqv_JPEG/%B9%D9%C4%FB_%B4%DE%B8%B0_%BC%F6%B9%DA.jpg?type=a220', 'https://audio-phinf.pstatic.net/20210210_121/16129140764023V6tm_JPEG/9788962193275_cover.jpg?type=a220', 'https://audio-phinf.pstatic.net/20210210_217/1612911638565hftTM_JPEG/9788962193228_cover.jpg?type=a220', 'https://audio-phinf.pstatic.net/20191104_289/1572850711357JHluX_JPEG/%B1%B8%B8%DB%C0%BB_%C1%D6%BF%FC%BE%EE.jpg?type=a220', 'https://audio-phinf.pstatic.net/20210210_87/16129128519409dWUq_JPEG/9788962193244_cover.jpg?type=a220', 'https://audio-phinf.pstatic.net/20210210_257/1612912266997OmogW_JPEG/9788962193237_cover.jpg?type=a220', 'https://audio-phinf.pstatic.net/20210906_221/1630912374416Wt1Vs_JPEG/%B8%AE%B4%BA%BE%F3_%C3%B5%B0%B3%C0%C7%B9%D9%B6%F7_%C7%D2%B8%D3%B4%CF_%BE%EE%B5%F0_%C0%D6%BE%EE%BF%E4_%C7%A5%C1%F6%28%BE%D5%29.JPG?type=a220', 'https://audio-phinf.pstatic.net/20191104_84/1572848510977MzA6X_JPEG/%B3%CA%2C%B1%D7%B7%AF%B4%D9%B0%A1.jpg?type=a220', 'https://audio-phinf.pstatic.net/20191104_260/15728484590882Qfm7_JPEG/%BE%DF%C8%A3_%BC%F6%B9%DA.jpg?type=a220', 'https://audio-phinf.pstatic.net/20201207_222/1607315052021UhY0r_JPEG/%BB%F3%C7%D8%C0%D3%BD%C3%C1%A4%BA%CE.jpg?type=a220', 'https://audio-phinf.pstatic.net/20211012_8/1634005060134xIRgw_JPEG/%B5%B6%B5%B5_%B0%ED%B7%A1_%BF%DC%BB%D4%C0%CC.jpg?type=a220', 'https://audio-phinf.pstatic.net/20210907_11/1630999761234hxNky_JPEG/9788936498009_cover.jpg?type=a220', 'https://audio-phinf.pstatic.net/20210907_139/1630994706207ANwGT_JPEG/9788936498023_cover.jpg?type=a220', 'https://audio-phinf.pstatic.net/20211012_256/1634010832115D81YH_JPEG/%BF%CD%C0%CC%C6%C4%C0%CC%B8%A6_%B8%D4%BE%EE%B9%F6%B8%B0_%C6%DE%B7%B0%B9%D9%C1%F6%B5%E9.jpg?type=a220', 'https://audio-phinf.pstatic.net/20210909_204/1631180968216V12mg_JPEG/9788956181158_cover.jpg?type=a220', 'https://audio-phinf.pstatic.net/20200316_92/1584350440991lYTyT_JPEG/9788936468323.jpg?type=a220']

  // const link = ['https://youtu.be/u3SWQ6g-Pcc', 'https://youtu.be/es555g0Cl6o', 'https://youtu.be/DYEvjGEHQYQ', 'https://youtu.be/J1R2nb8567E', 'https://youtu.be/C-9dFn86TKI', 'https://youtu.be/dyw2TA1YlxM', 'https://youtu.be/rt1wYT6cLwA', 'https://youtu.be/ZH2orfbJgPM', 'https://youtu.be/Chgi1gCyLko', 'https://youtu.be/OCSgPe3Y_XM', 'https://youtu.be/-FnwBN8qQz4', 'https://youtu.be/kTncPXu6e8k', 'https://youtu.be/GHu8VcmjsHM', 'https://youtu.be/zEyCxZSIo2U', 'https://youtu.be/TKP0VRhFHPs', 'https://youtu.be/Tly_ZWXqDew', 'https://youtu.be/LElpDn3BJbw', 'https://youtu.be/xM1mGwz2HFg']
  // const ad = ['코로나19 예방접종', 'SM6', '페레로 로쉐', '쿠키런: 킹덤', '언디셈버', '코카-콜라', '롯데리아', '롯데카드', 'BBQ', '브라벡토', '갤럭시 Z 플립', '진로', '맥도날드', 'QM6', '발휘', 'LX하우시스', 'G70', 'QM6']
  // const date = ['2022-01-17', '2022-01-14', '2021-10-21', '2022-01-19', '2022-01-13', '2022-01-04', '2021-12-17', '2021-11-19', '2021-09-17', '2021-05-10', '2021-09-09', '2021-06-10', '2021-10-06', '2021-10-06', '2021-01-26', '2021-09-17', '2019-11-03', '2021-09-03']

  const character = ['예신', '한건우', '아티스', '루인 마이어', '카엘', '남성 아델', '반 레온', '권정혁', '게파드', '타카', '스카라무슈', '파벨', '딘', '강비오', '사리엘', '란', '청룡', '수정공', '그라하 티아', '자색고구마맛 쿠키', '복제의 대가 제레크', '백도윤', '저스틴 샤말', '윤노아', '에마', '안톤']
  const image = ['https://user-images.githubusercontent.com/67995526/155468381-b7808363-b0b9-4a05-ba1e-30238db8a506.png', 'https://user-images.githubusercontent.com/67995526/155468395-8433a435-a134-4434-bd97-435707e196e6.jpg', 'https://user-images.githubusercontent.com/67995526/155468370-9c0d4d04-5919-4de1-8188-fcf1be2fdf83.png', 'https://user-images.githubusercontent.com/67995526/155468412-116e77d7-7ed9-4def-98a7-8d85913fb473.png', 'https://user-images.githubusercontent.com/67995526/155468388-a820dfce-2751-403a-b3d0-67c20b9a0f01.png', 'https://user-images.githubusercontent.com/67995526/155468408-09d66e21-3855-44ba-856e-6d28018bffa5.png', 'https://user-images.githubusercontent.com/67995526/155468415-3598cda4-d99c-4a1b-8812-015935147462.png', 'https://user-images.githubusercontent.com/67995526/155468403-85e31c04-ecf3-433e-92e7-97cd99c84b14.png', 'https://user-images.githubusercontent.com/67995526/155468399-323c6916-b92f-4b20-8307-8e214e6fe8e5.png', 'https://user-images.githubusercontent.com/67995526/155468390-46631f27-54c7-4b78-bb2c-cb543b32206b.png', 'https://user-images.githubusercontent.com/67995526/155468424-f4e49dd2-1a19-48e4-a33d-344f2d961891.png', 'https://user-images.githubusercontent.com/67995526/155468392-f3e331e9-2a24-442c-815d-e6da54a84954.png', 'https://user-images.githubusercontent.com/67995526/155468409-e42f04eb-79c9-4a1d-a41d-285dc738dfd4.png', 'https://user-images.githubusercontent.com/67995526/155468396-f46efd03-5792-4ed7-85a1-53809d95c121.png', 'https://user-images.githubusercontent.com/67995526/155468418-c4223687-e884-4355-9eb4-50d6dc823570.png', 'https://user-images.githubusercontent.com/67995526/155468410-538d330f-3244-4b05-9b27-f14c5677ded9.png', 'https://user-images.githubusercontent.com/67995526/155468387-07f22fd6-c549-44ef-a36d-bccc3d40978e.png', 'https://user-images.githubusercontent.com/67995526/155468422-6c78148d-1085-4e28-b441-0d26a7db56b1.png', 'https://user-images.githubusercontent.com/67995526/155468405-786cd6b7-2e39-4665-b81d-fab58da5d5c4.png', 'https://static.wikia.nocookie.net/cookierun/images/a/a1/%EC%9E%90%EC%83%89%EA%B3%A0%EA%B5%AC%EB%A7%88%EB%A7%9B_%EC%BF%A0%ED%82%A4.png/revision/latest/top-crop/width/360/height/450?cb=20201013090824&path-prefix=ko', 'https://user-images.githubusercontent.com/67995526/155468385-0bac2c4f-ea2a-418b-8797-800fdef8b122.png', 'https://user-images.githubusercontent.com/67995526/155468416-23e80b3e-b5e0-4f62-ace3-b26c0a782456.png', 'https://user-images.githubusercontent.com/67995526/155468384-38963d13-8661-41af-bc0e-54ffbbcba0ef.png', 'https://user-images.githubusercontent.com/67995526/155468383-77f4b12e-6a57-4be7-956f-5e9a7e288409.png', 'https://user-images.githubusercontent.com/67995526/155468380-54ac3be6-ad60-4223-bacc-91fb1fe430ef.png', 'https://user-images.githubusercontent.com/67995526/155468378-9c8a2086-eff3-49ae-a175-4cbb4fcf81f6.png']
  const content =  ['다시 그리는 시간', '더 보이스', '데스티니 차일드', '로드 오브 히어로즈', '마비노기 영웅전', '메이플스토리', '메이플스토리', '부탁해요 매니저님', '붕괴: 스타레일', '세븐나이츠', '원신', '에픽세븐', '엘크로니클', '워너비챌린지', '일곱 개의 대죄 그랜드 크로스', '인형이야기', '파이널 판타지 14', '파이널 판타지 14', '파이널 판타지 14', '쿠키런: 킹덤', '하스스톤', 'XXX보호구역', '그녀가 공작저로 가야했던 사정', '미해결사건부', 'Library of Ruina', 'Library of Ruina']

  const [selected, setSelected] = useState(dubbing)

  const handleType = (type) => {
    if (type==="dubbing") {
      setSelected(dubbing)
    }
    if (type==="short") {
      setSelected(short)
    }
    if (type==="foreign") {
      setSelected(foreign)
    }
    if (type==="audiobook") {
      setSelected(audiobook)
    }
    if (type==="ad") {
      setSelected(ad)
    }
  }

  useEffect(() => {
    handleType('dubbing')
  }, [])

  const [input1, setInput1] = useState('')
  const [input2, setInput2] = useState('')
  const [input3, setInput3] = useState('')
  const [type, setType] = useState('tv')

  const handleInput = (num,e) => {
    if (num===0) {
      setInput1(e.target.value)
    }
    if (num===1) {
      setInput2(e.target.value)
    }
    if (num===2) {
      setInput3(e.target.value)
    }
  }

  // Input 폼
  const createForm = []
  for (let i = 0; i < selected[1].length; i++) {
    createForm.push(
      <p>{selected[1][i]}<span> *</span></p>
    )
    createForm.push(
      <Input placeholder={selected[1][i]} id={String(i)} inputHandler={(e) => handleInput(i,e)}></Input>
    )
  }

  const submit = () => {
    // console.log('Nothing Happens :D')
    // for (let i = 0; i < book.length; i++) {
    //   const saveForm = {
    //     "Author": author[i],
    //     "Book": book[i],
    //     "Link": link[i],
    //     "Date": date[i],
    //     "Image": image[i]
    //   }
    //   console.log(book[i])
    //   DataStore.save(new Audiobook(saveForm))
    // }
    // for (let i = 0; i < ad.length; i++) {
    //   const saveForm = {
    //     "Ad": ad[i],
    //     "Link": link[i],
    //     "Date": date[i],
    //   }
    //   console.log(ad[i])
    //   DataStore.save(new Ad(saveForm))
    // }
    for (let i = 0; i < character.length; i++) {
      const saveForm = {
        "Character": character[i],
        "Content": content[i],
        "Image": image[i],
        "Type": 'game',
      }
      console.log(character[i])
      DataStore.save(new Dubbing(saveForm))
    }
  }
  // const submit = () => {
  //   if (selected[3][0]==='tv') {
  //     const saveForm = {
  //       "Character": input1,
  //       "Content": input2,
  //       "Type": type,
  //     }
  //     DataStore.save(
  //       new Dubbing(saveForm)
  //     )
  //   }
  //   if (selected[3][0]==='ad') {
  //     const saveForm = {
  //       "Ad": input1,
  //     }
  //     DataStore.save(
  //       new Ad(saveForm)
  //     )
  //   }
  //   if (selected[3][0]==='foreign') {
  //     const saveForm = {
  //       "Character": input1,
  //       "Content": input2,
  //       "Actor": input3,
  //     }
  //     DataStore.save(
  //       new Foreign(saveForm)
  //     )
  //   }
  //   if (selected[3][0]==='audiobook') {
  //     const saveForm = {
  //       "Author": input1,
  //       "Book": input2,
  //     }
  //     DataStore.save(
  //       new Audiobook(saveForm)
  //     )
  //   }
  //   if (selected[3][0]==='short') {
  //     const saveForm = {
  //       "Character": input1,
  //       "Content": input2,
  //     }
  //     DataStore.save(
  //       new Short(saveForm)
  //     )
  //   }
  // }

  return (
    <div className={styles.bg}>
      <div className={styles.rear}>
        <div className={styles.tab}>
          <input id="dubbing" type="radio" name="type"/>
          <label className={styles.tab_item} for="dubbing" onClick={() => {handleType('dubbing')}}>더빙</label>
          <input id="ad" type="radio" name="type"/>
          <label className={styles.tab_item} for="ad" onClick={() => {handleType('ad')}}>광고</label>
          <input id="foreign" type="radio" name="type"/>
          <label className={styles.tab_item} for="foreign" onClick={() => {handleType('foreign')}}>외화</label>
          <input id="audiobook" type="radio" name="type"/>
          <label className={styles.tab_item} for="audiobook" onClick={() => {handleType('audiobook')}}>오디오북</label>
          <input id="short" type="radio" name="type"/>
          <label className={styles.tab_item} for="short" onClick={() => {handleType('short')}}>단역</label>
        </div>

        <div className={styles.form}>
          <p>작품 유형<span> *</span></p>
          <Select option={selected[0]} value={selected[3]} selectHandler={e => setType(e.target.value)}></Select>
          {createForm}
        </div>
        <Button className={styles.button} text="데이터 저장" clickHandler={submit}></Button>
      </div>
    </div>
  )
}

export default Create