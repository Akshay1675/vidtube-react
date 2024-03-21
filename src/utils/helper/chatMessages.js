export function getRandomTextMessage() {
  const messages = [
    "Hello, how are you?",
    "What's up?",
    "Have a great day!",
    "Good morning!",
    "Good afternoon!",
    "Good evening!",
    "It's a beautiful day!",
    "I'm here to help!",
    "Keep smiling! ❤️",
    "You're awesome!",
    "Enjoy your day!",    
    "You've got this!",
    "Let's make today amazing!",
    "You're doing great!",
    "Sending positive vibes!",
    "Make it a great one!",
    "Nice video",
    "1 M Subscribers ⚡",
    "5000 Watching",
    "Subscribe to my channel",
    "Upload more videos like this",
    "Play GTA5 ⚡",
    "❤️",
    "🖤​​ Hii",
    "Dont spam",
    "I will vote for you if you become the Health Minister of this country❤️",
    "Ohhh i won't even talk about content, the Editing is nextt level!!!!😱✨",
    "he is so down to earth man loved him❤️👍🙏",
    "Let's appreciate his hard work❤️",
  ];

  // Generate a random index to select a random message
  const randomIndex = Math.floor(Math.random() * messages.length);
  
  // Return the random message
  return messages[randomIndex];
}

export function getRandomName() {
  const maleNames = [
      "Aarav",
      "Aryan",
      "Rohan",
      "Vikram",
      "Arjun",
      "Raj",
      "Kunal",
      "Amit",
      "Rahul",
      "Suresh",
      "Deepak",
      "Gopal",
      "Ajay",
      "Sanjay",
      "Ravi",
      "Sachin",
      "Ankit",
      "Rakesh",
      "Vishal",
      "Alok",
  ];

  const femaleNames = [
      "Priya ❤️",
      "Neha",
      "Pooja",
      "Sneha",
      "Riya",
      "Aarti 🖤",
      "Shreya",
      "Anjali",
      "Deepika",
      "Divya",
      "Nisha",
      "Kavita",
      "Jyoti",
      "Sunita",
      "Rashmi",
      "Anita",
      "Meera",
      "Pallavi",
      "Mona",
      "Kiran",
  ];

  const randomMaleName = maleNames[Math.floor(Math.random() * maleNames.length)];
  const randomFemaleName = femaleNames[Math.floor(Math.random() * femaleNames.length)];

  // Randomly choose between male and female names
  return Math.random() < 0.5 ? randomMaleName : randomFemaleName;
}

export function getRandomImageURL() {
  const maleImageURLs = [
      "https://randomuser.me/api/portraits/men/1.jpg",
      "https://randomuser.me/api/portraits/men/2.jpg",
      "https://randomuser.me/api/portraits/men/3.jpg",
      // Add more male image URLs as needed
  ];

  const femaleImageURLs = [
      "https://randomuser.me/api/portraits/women/1.jpg",
      "https://randomuser.me/api/portraits/women/2.jpg",
      "https://randomuser.me/api/portraits/women/3.jpg",
      // Add more female image URLs as needed
  ];

  // Randomly choose between male and female images
  const isMale = Math.random() < 0.5;
  const imageArray = isMale ? maleImageURLs : femaleImageURLs;

  // Generate a random index to select a random image URL
  const randomIndex = Math.floor(Math.random() * imageArray.length);

  // Return the random image URL
  return imageArray[randomIndex];
}
