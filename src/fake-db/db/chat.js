import shortId from "shortid";
import Mock from "../mock";
// import * as _ from "lodash";

const ChatDB = {
  user: [
    {
      name: "John Doe",
      status: "online",
      id: "7863a6802ez0e277a0f98534",
      avatar: "/assets/images/face-1.jpg",
      chatInfo: [
        {
          unread: 4,
          chatId: "89564a680b3249760ea21fe77",
          contactId: "323sa680b3249760ea21rt47",
          lastChatTime: "2017-06-12T02:10:18.931Z",
        },
        {
          unread: 0,
          chatId: "3289564a680b2134760ea21fe7753",
          lastChatTime: "2019-03-10T02:10:18.931Z",
          contactId: "14663a3406eb47ffa63d4fec9429cb71",
        },
      ],
    },
  ],

  contacts: [
    {
      mood: "",
      status: "online",
      name: "Frank Powell",
      id: "323sa680b3249760ea21rt47",
      avatar: "/assets/images/faces/13.jpg",
    },
    {
      mood: "",
      name: "John Doe",
      status: "online",
      id: "7863a6802ez0e277a0f98534",
      avatar: "/assets/images/face-1.jpg",
    },
    {
      mood: "",
      status: "online",
      name: "Betty Diaz",
      id: "14663a3406eb47ffa63d4fec9429cb71",
      avatar: "/assets/images/faces/12.jpg",
    },
    {
      mood: "",
      status: "online",
      name: "Brian Stephens",
      id: "43bd9bc59d164b5aea498e3ae1c24c3c",
      avatar: "/assets/images/faces/3.jpg",
    },
    {
      mood: "",
      status: "offline",
      name: "Jacqueline Day",
      id: "3fc8e01f3ce649d1caf884fbf4f698e4",
      avatar: "/assets/images/faces/16.jpg",
    },
    {
      mood: "",
      status: "online",
      name: "Arthur Mendoza",
      id: "e929b1d790ab49968ed8e34648553df4",
      avatar: "/assets/images/faces/10.jpg",
    },
    {
      mood: "",
      status: "offline",
      name: "Jeremy Lee",
      id: "d6caf04bba614632b5fecf91aebf4564",
      avatar: "/assets/images/faces/9.jpg",
    },
    {
      mood: "",
      status: "offline",
      name: "Johnny Newman",
      id: "be0fb188c8e242f097fafa24632107e4",
      avatar: "/assets/images/faces/5.jpg",
    },
    {
      mood: "",
      status: "online",
      name: "Jeffrey Little",
      id: "dea902191b964a68ba5f2d93cff37e13",
      avatar: "/assets/images/faces/15.jpg",
    },
    {
      mood: "",
      status: "offline",
      name: "Barbara Romero",
      id: "0bf58f5ccc4543a9f8747350b7bda3c7",
      avatar: "/assets/images/faces/4.jpg",
    },
    {
      mood: "",
      status: "offline",
      name: "Daniel James",
      id: "c5d7498bbcb84d81fc72168871ac6a6e",
      avatar: "/assets/images/faces/2.jpg",
    },
    {
      mood: "",
      status: "offline",
      name: "Alice Sanders",
      id: "97bfbdd9413e46efdaca2010400fe18c",
      avatar: "/assets/images/faces/17.jpg",
    },
  ],

  chatCollection: [
    {
      id: "89564a680b3249760ea21fe77",
      chats: [
        {
          time: "2018-02-10T08:45:28.291Z",
          contactId: "323sa680b3249760ea21rt47",
          text: "Do you ever find yourself falling into the “discount trap?”",
        },
        {
          time: "2018-02-10T08:45:28.291Z",
          contactId: "7863a6802ez0e277a0f98534",
          text: "Giving away your knowledge or product just to gain clients?",
        },
        {
          text: "Yes",
          time: "2018-02-10T08:45:28.291Z",
          contactId: "323sa680b3249760ea21rt47",
        },
        {
          time: "2018-02-10T08:45:28.291Z",
          contactId: "7863a6802ez0e277a0f98534",
          text: "Don’t feel bad. It happens to a lot of us",
        },
        {
          time: "2018-02-10T08:45:28.291Z",
          contactId: "323sa680b3249760ea21rt47",
          text: "Do you ever find yourself falling into the “discount trap?”",
        },
        {
          time: "2018-02-10T08:45:28.291Z",
          contactId: "7863a6802ez0e277a0f98534",
          text: "Giving away your knowledge or product just to gain clients?",
        },
        {
          text: "Yes",
          time: "2018-02-10T08:45:28.291Z",
          contactId: "323sa680b3249760ea21rt47",
        },
        {
          time: "2018-02-10T08:45:28.291Z",
          contactId: "7863a6802ez0e277a0f98534",
          text: "Don’t feel bad. It happens to a lot of us",
        },
      ],
    },
    {
      id: "3289564a680b2134760ea21fe7753",
      chats: [
        {
          time: "2019-03-10T08:45:28.291Z",
          contactId: "14663a3406eb47ffa63d4fec9429cb71",
          text: "Do you ever find yourself falling into the “discount trap?”",
        },
        {
          contactId: "7863a6802ez0e277a0f98534",
          text: "Giving away your knowledge or product just to gain clients?",
          time: "2019-03-10T08:45:28.291Z",
        },
        {
          contactId: "14663a3406eb47ffa63d4fec9429cb71",
          text: "Yes",
          time: "2019-03-10T08:45:28.291Z",
        },
        {
          contactId: "7863a6802ez0e277a0f98534",
          text: "Don’t feel bad. It happens to a lot of us",
          time: "2019-03-10T08:45:28.291Z",
        },
      ],
    },
  ],
};

Mock.onGet("/api/chat").reply((config) => {
  const id = config.data;
  const chats = ChatDB.chatCollection.find((collection) => collection.id === id).chats;
  const response = chats.map((chat) => {
    let temp = ChatDB.contacts.find((user) => user.id === chat.contactId);
    return { ...chat, ...temp };
  });
  return [200, response];
});

Mock.onGet("/api/chat/chat-room").reply((config) => {
  const { currentUser, contactId } = JSON.parse(config.data);

  const chatUser = ChatDB.user.find((user) => user.id === currentUser);
  const chatRoom = chatUser.chatInfo.find((chat) => chat.contactId === contactId);

  if (chatRoom) {
    const chats = ChatDB.chatCollection.find(
      (collection) => collection.id === chatRoom.chatId
    ).chats;

    const messageList = chats.map((chat) => {
      let temp = ChatDB.contacts.find((user) => user.id === chat.contactId);
      return { ...chat, ...temp };
    });

    const response = {
      messageList,
      chatId: chatRoom.chatId,
      recentListUpdated: false,
    };

    return [200, response];
  } else {
    let chatId = shortId.generate();

    ChatDB.user.forEach((user) => {
      if (currentUser === user.id) {
        user.chatInfo.push({
          chatId,
          contactId,
          unread: 0,
          lastChatTime: Date.now(),
        });
      }
    });

    ChatDB.chatCollection.push({ id: chatId, chats: [] });

    const response = {
      chatId,
      messageList: [],
      recentListUpdated: true,
    };

    return [200, response];
  }
});

Mock.onGet("/api/chat/contacts/recent").reply((config) => {
  let temp = { contact: "" };
  const id = config.data;
  const contacts = ChatDB.user.find((user) => user.id === id).chatInfo;

  const response = contacts.map((contact) => {
    temp.contact = ChatDB.contacts.find((user) => user.id === contact.contactId);
    return { ...temp.contact, ...contact };
  });

  return [200, response];
});

Mock.onGet("/api/chat/contacts/all").reply((config) => {
  const id = config.data;
  const response = ChatDB.contacts.filter((contact) => contact.id !== id);
  return [200, response];
});

Mock.onGet("/api/chat/contacts").reply((config) => {
  const id = config.data;
  const response = ChatDB.contacts.find((contact) => contact.id === id);
  return [200, response];
});

Mock.onPost("/api/chat/add").reply((config) => {
  let chatDetails = JSON.parse(config.data);
  let { chatId } = chatDetails;

  ChatDB.chatCollection.forEach((chatRoom) => {
    if (chatId === chatRoom.id) {
      delete chatDetails.chatId;
      chatRoom.chats.push({ ...chatDetails });
    }
  });

  let chats = ChatDB.chatCollection.find((chatRoom) => chatRoom.id === chatId).chats;

  let response = chats.map((chat) => {
    let temp = ChatDB.contacts.find((user) => user.id === chat.contactId);
    return { ...chat, ...temp };
  });

  return [200, response];
});
