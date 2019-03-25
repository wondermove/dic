const LICTypeDic =  new Map();
LICTypeDic.set('1stLarge', '1종 대형');
LICTypeDic.set('1stSpecial', '1종 특수');
LICTypeDic.set('1stRegular', '1종 보통');
LICTypeDic.set('1stSmall', '1종 소형');
LICTypeDic.set('2ndRegular', '2종 보통');
LICTypeDic.set('2ndSmall', '2종 소형');

const LICTypeRDic =  new Map();
LICTypeRDic.set('1종 대형', '1stLarge');
LICTypeRDic.set('1종 특수', '1stSpecial');
LICTypeRDic.set('1종 보통', '1stRegular');
LICTypeRDic.set('1종 소형', '1stSmall');
LICTypeRDic.set('2종 보통', '2ndRegular');
LICTypeRDic.set('2종 소형', '2ndSmall');

const vehicleOwnerDic = new Map();
vehicleOwnerDic.set('self','본인');
vehicleOwnerDic.set('indvLease','개인 리스');
vehicleOwnerDic.set('family','가족 소유');
vehicleOwnerDic.set('corporate','법인 소유');
vehicleOwnerDic.set('corporateLease','법인 리스');
vehicleOwnerDic.set('otherPersonName','타인 명의');

const vehicleOwnerRDic = new Map();
vehicleOwnerRDic.set('본인', 'self');
vehicleOwnerRDic.set('개인 리스', 'indvLease');
vehicleOwnerRDic.set('가족 소유', 'family');
vehicleOwnerRDic.set('법인 소유', 'corporate');
vehicleOwnerRDic.set('법인 리스', 'corporateLease');
vehicleOwnerRDic.set('타인 명의', 'otherPersonName');

const progressStatusDic = new Map();
progressStatusDic.set('input', '입력 중');
progressStatusDic.set('judgement', '심사 중');
progressStatusDic.set('admission', '운행');

const progressStatusRDic = new Map();
progressStatusRDic.set('입력 중', 'input');
progressStatusRDic.set('심사 중', 'judgement');
progressStatusRDic.set('운행', 'admission');

const genderTypeDic = new Map();
genderTypeDic.set('both', '남녀누구나');
genderTypeDic.set('female', '여성');
genderTypeDic.set('male', '남성');

const genderTypeRDic = new Map();
genderTypeRDic.set('남녀누구나', 'both');
genderTypeRDic.set('여성', 'female');
genderTypeRDic.set('남성', 'male');

const ambienceTypeDic = new Map();
ambienceTypeDic.set('noiselessly', '조용하게');
ambienceTypeDic.set('joyfulConv', '즐거운 대화');
ambienceTypeDic.set('cheerfully', '쾌활하게');

const ambienceTypeRDic = new Map();
ambienceTypeRDic.set('조용하게', 'noiselessly');
ambienceTypeRDic.set('즐거운 대화', 'joyfulConv');
ambienceTypeRDic.set('쾌활하게', 'cheerfully');

const driverRegSectionDic = new Map();
driverRegSectionDic.set('routeInfo', '경로 정보');
driverRegSectionDic.set('vehicleInfo', '차량 정보');
driverRegSectionDic.set('driverInfo', '운전자 정보');
driverRegSectionDic.set('moreInfo', '상세 정보');
driverRegSectionDic.set('documentImage', '서류 이미지');

const driverRegSectionRDic = new Map();
driverRegSectionRDic.set('경로 정보', 'routeInfo');
driverRegSectionRDic.set('차량 정보', 'vehicleInfo');
driverRegSectionRDic.set('운전자 정보', 'driverInfo');
driverRegSectionRDic.set('상세 정보', 'moreInfo');
driverRegSectionRDic.set('서류 이미지', 'documentImage');

module.exports = {
  LICTypeDic,
  LICTypeRDic,
  vehicleOwnerDic,
  vehicleOwnerRDic,
  progressStatusDic,
  progressStatusRDic,
  genderTypeDic,
  genderTypeRDic,
  ambienceTypeDic,
  ambienceTypeRDic,
  driverRegSectionDic,
  driverRegSectionRDic
}