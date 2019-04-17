const refundReqTypeDic = new Map();
refundReqTypeDic.set('carpoolEnd', '카풀 종료');
refundReqTypeDic.set('carpoolExit', '운행 종료');
refundReqTypeDic.set('carpoolStop', '운행 중단');
refundReqTypeDic.set('carpoolOut', '멤버 내보내기');
refundReqTypeDic.set('memberWithdrawal', '회원 탈퇴');


const refundReqTypeRDic = new Map();
refundReqTypeRDic.set('카풀 종료', 'carpoolEnd');
refundReqTypeRDic.set('운행 종료', 'carpoolExit');
refundReqTypeRDic.set('운행 중단', 'carpoolStop');
refundReqTypeRDic.set('멤버 내보내기', 'carpoolOut');
refundReqTypeRDic.set('회원 탈퇴', 'memberWithdrawal');

const refundReqStatusDic = new Map();
refundReqStatusDic.set('resolved', '해결')
refundReqStatusDic.set('unresolved', '미해결')

const refundReqStatusRDic = new Map();
refundReqStatusRDic.set('해결', 'resolved')
refundReqStatusRDic.set('미해결', 'unresolved')

const refundReqServiceTypeDic = new Map();
refundReqServiceTypeDic.set('rider', '라이더');
refundReqServiceTypeDic.set('driver', '드라이버');

const refundReqServiceTypeRDic = new Map();
refundReqServiceTypeRDic.set('라이더', 'rider');
refundReqServiceTypeRDic.set('드라이버', 'driver');

const issueReportDecisionTypeDic = new Map();
issueReportDecisionTypeDic.set('notNotifiedNonDriving', '미통보 미운행');
issueReportDecisionTypeDic.set('notifiedNonDriving', '통보 미운행');

const issueReportDecisionTypeRDic = new Map();
issueReportDecisionTypeRDic.set('미통보 미운행', 'notNotifiedNonDriving');
issueReportDecisionTypeRDic.set('통보 미운행', 'notifiedNonDriving');


module.exports = {
  refundReqTypeDic,
  refundReqTypeRDic,
  refundReqStatusDic,
  refundReqStatusRDic,
  refundReqServiceTypeDic,
  refundReqServiceTypeRDic,
  issueReportDecisionTypeDic,
  issueReportDecisionTypeRDic
}

