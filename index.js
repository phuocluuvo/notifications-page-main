const section = document.getElementById("notifications");

const notifications = [
  {
    imageUri: "./assets/images/avatar-mark-webber.webp",
    username: "Mark Webber",
    action: "reacted to your recent post",
    postName: "My first tournament today!",
    timestamp: "1m ago",
    isRead: false,
  },
  {
    imageUri: "./assets/images/avatar-angela-gray.webp",
    username: "Angela Gray",
    action: "followed you",
    timestamp: "5m ago",
    isRead: false,
  },
  {
    imageUri: "./assets/images/avatar-jacob-thompson.webp",
    username: "Jacob Thompson",
    action: "has joined your group",
    groupname: "Chess Club",
    timestamp: "1 day ago",
    isRead: false,
  },
  {
    imageUri: "./assets/images/avatar-rizky-hasanuddin.webp",
    username: "Rizky Hasanuddin",
    action: "sent you a private message",
    timestamp: "1m ago",
    content:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game",
    isRead: true,
  },
  {
    imageUri: "./assets/images/avatar-kimberly-smith.webp",
    username: "Kimberly Smith",
    action: "commented on your picture",
    timestamp: "1 week ago",
    isRead: true,
    imagePost: "./assets/images/image-chess.webp",
  },
  {
    imageUri: "./assets/images/avatar-nathan-peterson.webp",
    username: "Nathan Peterson",
    isRead: true,
    action: "reacted to your recent post",
    postName: "5 end-game strategies to increase your win rate",
    timestamp: "2 weeks ago",
    isRead: true,
  },

  {
    imageUri: "./assets/images/avatar-anna-kim.webp",
    username: "Anna Kim",
    action: "left the group Chess Club",
    timestamp: "2 weeks ago",
    isRead: true,
  },
];

notifications.forEach((n) => {
  section.innerHTML += `
    <div class='notification ${n.isRead ? "unread" : "read"}'>
        <img class='avatar' alt=${n.title} src=${n.imageUri}>
        <div class='content'>
            <div>
                <p class='title'><a class='username' href="#">${
                  n.username
                }</a> <span>${n.action}</span><a href="#"> ${
    n?.postName ? n.postName : ""
  }</a> <a class="club-title" href="#">${
    n?.groupname ? n.groupname : ""
  }</a></p>
                <div class=${n.isRead ? "hidden" : "display"}>•</div>
            </div>
            <p class='timestamp'>${n.timestamp}</p>
             ${n?.content ? `<p class="message">${n.content}</p>` : ""}
        </div>
        <span style="flex:1"></span>
        ${n?.imagePost ? `<img class='post-image' src=${n.imagePost} />` : ""}
    </div>
    `;
});
