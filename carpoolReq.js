const reqStatusDic = new Map();
reqStatusDic.set('request', '요청');
reqStatusDic.set('cancel', '취소');
reqStatusDic.set('accept', '승인');
reqStatusDic.set('timeout', '응답시간초과');
reqStatusDic.set('refusal', '거절');
reqStatusDic.set('negotiating', '조율중');
reqStatusDic.set('carpoolStart', '카풀 시작');
reqStatusDic.set('carpoolOnce', '카풀 1회 이용');
reqStatusDic.set('carpoolExit', '카풀 종료');
reqStatusDic.set('carpoolEnd', '카풀 종료');

const reqStatusRDic = new Map();
reqStatusRDic.set('요청', 'request');
reqStatusRDic.set('취소', 'cancel');
reqStatusRDic.set('승인', 'accept');
reqStatusRDic.set('응답시간초과', 'timeout');
reqStatusRDic.set('거절', 'refusal');
reqStatusRDic.set('조율중', 'negotiating');
reqStatusRDic.set('카풀 시작', 'carpoolStart');
reqStatusRDic.set('카풀 1회 이용', 'carpoolOnce');
reqStatusRDic.set('카풀 종료', 'carpoolExit');
reqStatusRDic.set('카풀 종료', 'carpoolEnd');

const seatLocDic = new Map();
seatLocDic.set('front', '보조석');
seatLocDic.set('rear', '뒷좌석');

const seatLocRDic = new Map();
seatLocRDic.set('보조석', 'front');
seatLocRDic.set('뒷좌석', 'rear');

const refusalTypeDic = new Map();
refusalTypeDic.set('lateReply', '늦은 답변');
refusalTypeDic.set('lowMatchingRate', '출근길 매칭률이 낮음');
refusalTypeDic.set('otherRider', '다른 라이더와 카풀 확정');
refusalTypeDic.set('iDoNotWant', '카풀 운행 의지가 없어짐');
refusalTypeDic.set('difficultNego', '탑승 사항 조율 어려움');

const refusalTypeRDic = new Map();
refusalTypeRDic.set('늦은 답변', 'lateReply');
refusalTypeRDic.set('출근길 매칭률이 낮음', 'lowMatchingRate');
refusalTypeRDic.set('다른 라이더와 카풀 확정', 'otherRider');
refusalTypeRDic.set('카풀 운행 의지가 없어짐', 'iDoNotWant');
refusalTypeRDic.set('탑승 사항 조율 어려움', 'difficultNego');

const reqCancelDic = new Map();
reqCancelDic.set('lateReply', '늦은 답변');
reqCancelDic.set('otherDriver', '다른 드라이버와 카풀 확정');
reqCancelDic.set('iDoNotWant', '카풀 진행 의지가 없어짐');
reqCancelDic.set('difficultNego', '세부 탑승 사항 조율 어려움');

const reqCancelRDic = new Map();
reqCancelRDic.set('늦은 답변', 'lateReply');
reqCancelRDic.set('다른 드라이버와 카풀 확정', 'otherDriver');
reqCancelRDic.set('카풀 진행 의지가 없어짐', 'iDoNotWant');
reqCancelRDic.set('세부 탑승 사항 조율 어려움', 'difficultNego');

module.exports = {
  reqStatusDic,
  reqStatusRDic,
  seatLocDic,
  seatLocRDic,
  refusalTypeDic,
  refusalTypeRDic,
  reqCancelDic,
  reqCancelRDic
}