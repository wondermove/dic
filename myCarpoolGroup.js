const eventTypeDic = new Map();
eventTypeDic.set('noDriving', '미운행');
eventTypeDic.set('noBoarding', '미탑승');
eventTypeDic.set('shutdown', '운행 종료');
eventTypeDic.set('carpoolExit', '카풀 종료');
eventTypeDic.set('carpoolOut', '카풀 종료');
eventTypeDic.set('firstBoardingDate', '최초 탑승일');
eventTypeDic.set('lastBoardingDate', '마지막 탑승일');

const eventTypeRDic = new Map();
eventTypeRDic.set('미운행', 'noDriving');
eventTypeRDic.set('미탑승', 'noBoarding');
eventTypeRDic.set('운행 종료', 'shutdown');
eventTypeRDic.set('카풀 종료', 'carpoolExit');
eventTypeRDic.set('최초 탑승일', 'firstBoardingDate');
eventTypeRDic.set('마지막 탑승일', 'lastBoardingDate');

const eventReasonDic = new Map();
eventReasonDic.set('vacation', '휴가');
eventReasonDic.set('sickLeave', '병가');
eventReasonDic.set('personalSituation', '개인 용무');

const eventReasonRDic = new Map();
eventReasonRDic.set('휴가', 'vacation');
eventReasonRDic.set('병가', 'sickLeave');
eventReasonRDic.set('개인 용무', 'personalSituation');

const penaltyTypeDic = new Map();
penaltyTypeDic.set('notNotifiedNonDriving', '통보 미운행');
penaltyTypeDic.set('notifiedNonDriving', '미통보 미운행');

const penaltyTypeRDic = new Map();
penaltyTypeRDic.set('통보 미운행', 'notNotifiedNonDriving');
penaltyTypeRDic.set('미통보 미운행', 'notifiedNonDriving');

const carpoolEndReasonDic = new Map();
carpoolEndReasonDic.set('private', '개인 사유 (이사, 이직 등)');
carpoolEndReasonDic.set('rider', '라이더 사유 (취향, 잦은 지각 등)');
carpoolEndReasonDic.set('serviceComplaint', '원더풀 서비스에 대한 불만');

const carpoolEndReasonRDic = new Map();
carpoolEndReasonRDic.set('개인 사유 (이사, 이직 등)', 'private');
carpoolEndReasonRDic.set('라이더 사유 (취향, 잦은 지각 등)', 'rider');
carpoolEndReasonRDic.set('원더풀 서비스에 대한 불만', 'serviceComplaint');

const carpoolExitReasonDic = new Map();
carpoolExitReasonDic.set('private', '개인 사유 (이사, 이직 등)');
carpoolExitReasonDic.set('driver', '드라이버 사유 (취향, 잦은 지각 등)');
carpoolExitReasonDic.set('accompanyingRider', '동행 라이더 사유 (취향, 잦은 지각 등)');
carpoolExitReasonDic.set('serviceComplaint', '원더풀 서비스에 대한 불만');

const carpoolExitReasonRDic = new Map();
carpoolExitReasonRDic.set('개인 사유 (이사, 이직 등)', 'private');
carpoolExitReasonRDic.set('드라이버 사유 (취향, 잦은 지각 등)', 'driver');
carpoolExitReasonRDic.set('동행 라이더 사유 (취향, 잦은 지각 등)', 'accompanyingRider');
carpoolExitReasonRDic.set('원더풀 서비스에 대한 불만', 'serviceComplaint');

const lastCarpoolReasonDic = new Map();
lastCarpoolReasonDic.set('private', '개인 사유 (이사, 이직 등)');
lastCarpoolReasonDic.set('rider', '라이더 사유 (취향, 잦은 지각 등)');

const lastCarpoolReasonRDic = new Map();
lastCarpoolReasonRDic.set('개인 사유 (이사, 이직 등)', 'private');
lastCarpoolReasonRDic.set('라이더 사유 (취향, 잦은 지각 등)', 'rider');


const pointEarningMethodDic = new Map();
pointEarningMethodDic.set('notNotifiedNonDriving', '미통보 미운행')
pointEarningMethodDic.set('notifiedNonDriving', '통보 미운행')
pointEarningMethodDic.set('refund', '환불')
pointEarningMethodDic.set('etc', '기타')

const pointEarningMethodRDic = new Map();
pointEarningMethodRDic.set('미통보 미운행', 'notNotifiedNonDriving')
pointEarningMethodRDic.set('통보 미운행', 'notifiedNonDriving')
pointEarningMethodRDic.set('환불', 'refund')
pointEarningMethodRDic.set('기타', 'etc')


module.exports = {
  eventTypeDic,
  eventTypeRDic,
  eventReasonDic,
  eventReasonRDic,
  penaltyTypeDic,
  penaltyTypeRDic,
  carpoolEndReasonDic,
  carpoolEndReasonRDic,
  carpoolExitReasonDic,
  carpoolExitReasonRDic,
  lastCarpoolReasonDic,
  lastCarpoolReasonRDic,
  pointEarningMethodDic,
  pointEarningMethodRDic
}