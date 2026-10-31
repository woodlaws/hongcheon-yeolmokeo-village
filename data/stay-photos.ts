export type StayPhoto = {id:string;groupId:string;groupName:string;kind:string;src:string;caption:string;alt:string;width:number;height:number};
export type StayPhotoGroup = {id:string;name:string;kind:string;photos:StayPhoto[]};
export const stayPhotoGroups: StayPhotoGroup[] = [
  {
    "id": "bogumjari",
    "name": "보금자리",
    "kind": "lodging",
    "photos": [
      {
        "id": "bogumjari-exterior",
        "groupId": "bogumjari",
        "groupName": "보금자리",
        "kind": "lodging",
        "src": "/images/stay-real-v2/bogumjari/01-exterior.jpg",
        "caption": "보금자리 외관",
        "alt": "보금자리 외관",
        "width": 1600,
        "height": 901
      },
      {
        "id": "bogumjari-room-01",
        "groupId": "bogumjari",
        "groupName": "보금자리",
        "kind": "lodging",
        "src": "/images/stay-real-v2/bogumjari/02-room-01.jpg",
        "caption": "보금자리 침대 객실 1",
        "alt": "보금자리 침대 객실 1",
        "width": 1600,
        "height": 901
      },
      {
        "id": "bogumjari-room-02",
        "groupId": "bogumjari",
        "groupName": "보금자리",
        "kind": "lodging",
        "src": "/images/stay-real-v2/bogumjari/03-room-02.jpg",
        "caption": "보금자리 침대 객실 2",
        "alt": "보금자리 침대 객실 2",
        "width": 1600,
        "height": 901
      },
      {
        "id": "bogumjari-room-03",
        "groupId": "bogumjari",
        "groupName": "보금자리",
        "kind": "lodging",
        "src": "/images/stay-real-v2/bogumjari/04-room-03.jpg",
        "caption": "보금자리 침대 객실 3",
        "alt": "보금자리 침대 객실 3",
        "width": 1600,
        "height": 901
      },
      {
        "id": "bogumjari-room-entry",
        "groupId": "bogumjari",
        "groupName": "보금자리",
        "kind": "lodging",
        "src": "/images/stay-real-v2/bogumjari/05-room-entry.jpg",
        "caption": "보금자리 객실 입구와 내부",
        "alt": "보금자리 객실 입구와 내부",
        "width": 901,
        "height": 1600
      },
      {
        "id": "bogumjari-door-dal",
        "groupId": "bogumjari",
        "groupName": "보금자리",
        "kind": "lodging",
        "src": "/images/stay-real-v2/bogumjari/06-door-dal.jpg",
        "caption": "보금자리 달 이름표",
        "alt": "보금자리 달 이름표",
        "width": 901,
        "height": 1600
      },
      {
        "id": "bogumjari-door-hae",
        "groupId": "bogumjari",
        "groupName": "보금자리",
        "kind": "lodging",
        "src": "/images/stay-real-v2/bogumjari/07-door-hae.jpg",
        "caption": "보금자리 해 이름표",
        "alt": "보금자리 해 이름표",
        "width": 901,
        "height": 1600
      },
      {
        "id": "bogumjari-door-baram",
        "groupId": "bogumjari",
        "groupName": "보금자리",
        "kind": "lodging",
        "src": "/images/stay-real-v2/bogumjari/08-door-baram.jpg",
        "caption": "보금자리 바람 이름표",
        "alt": "보금자리 바람 이름표",
        "width": 901,
        "height": 1600
      }
    ]
  },
  {
    "id": "bieum-center",
    "name": "비움센터",
    "kind": "lodging",
    "photos": [
      {
        "id": "bieum-center-bedroom",
        "groupId": "bieum-center",
        "groupName": "비움센터",
        "kind": "lodging",
        "src": "/images/stay-real-v2/bieum-center/01-bedroom.jpg",
        "caption": "비움센터 침대 객실",
        "alt": "비움센터 침대 객실",
        "width": 1600,
        "height": 901
      },
      {
        "id": "bieum-center-sign",
        "groupId": "bieum-center",
        "groupName": "비움센터",
        "kind": "lodging",
        "src": "/images/stay-real-v2/bieum-center/02-sign.jpg",
        "caption": "비움센터 이름표",
        "alt": "비움센터 이름표",
        "width": 1600,
        "height": 901
      },
      {
        "id": "bieum-center-corridor-01",
        "groupId": "bieum-center",
        "groupName": "비움센터",
        "kind": "lodging",
        "src": "/images/stay-real-v2/bieum-center/03-corridor-01.jpg",
        "caption": "비움센터 실내 복도 1",
        "alt": "비움센터 실내 복도 1",
        "width": 1600,
        "height": 901
      },
      {
        "id": "bieum-center-corridor-02",
        "groupId": "bieum-center",
        "groupName": "비움센터",
        "kind": "lodging",
        "src": "/images/stay-real-v2/bieum-center/04-corridor-02.jpg",
        "caption": "비움센터 실내 복도 2",
        "alt": "비움센터 실내 복도 2",
        "width": 1600,
        "height": 901
      },
      {
        "id": "bieum-center-restroom-entrance",
        "groupId": "bieum-center",
        "groupName": "비움센터",
        "kind": "lodging",
        "src": "/images/stay-real-v2/bieum-center/05-restroom-entrance.jpg",
        "caption": "비움센터 공용 화장실 출입구",
        "alt": "비움센터 공용 화장실 출입구",
        "width": 1600,
        "height": 901
      }
    ]
  },
  {
    "id": "hanok",
    "name": "한옥 숙소",
    "kind": "lodging",
    "photos": [
      {
        "id": "hanok-exterior-01",
        "groupId": "hanok",
        "groupName": "한옥 숙소",
        "kind": "lodging",
        "src": "/images/stay-real-v2/hanok/01-exterior-01.jpg",
        "caption": "한옥 숙소 외관과 앞마루 1",
        "alt": "한옥 숙소 외관과 앞마루 1",
        "width": 1067,
        "height": 1600
      },
      {
        "id": "hanok-exterior-02",
        "groupId": "hanok",
        "groupName": "한옥 숙소",
        "kind": "lodging",
        "src": "/images/stay-real-v2/hanok/02-exterior-02.jpg",
        "caption": "한옥 숙소 외관과 앞마루 2",
        "alt": "한옥 숙소 외관과 앞마루 2",
        "width": 1067,
        "height": 1600
      }
    ]
  },
  {
    "id": "classroom",
    "name": "강의장",
    "kind": "facility",
    "photos": [
      {
        "id": "classroom-front",
        "groupId": "classroom",
        "groupName": "강의장",
        "kind": "facility",
        "src": "/images/stay-real-v2/classroom/01-front.jpg",
        "caption": "강의장 내부 전경",
        "alt": "강의장 내부 전경",
        "width": 1600,
        "height": 901
      },
      {
        "id": "classroom-rear",
        "groupId": "classroom",
        "groupName": "강의장",
        "kind": "facility",
        "src": "/images/stay-real-v2/classroom/02-rear.jpg",
        "caption": "강의장 내부 다른 방향",
        "alt": "강의장 내부 다른 방향",
        "width": 1600,
        "height": 901
      }
    ]
  },
  {
    "id": "community-hall",
    "name": "마을회관 숙소",
    "kind": "lodging",
    "photos": []
  }
];
