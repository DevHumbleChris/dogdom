export enum IconName {
  HOME,
  CIRCLE,
  USER,
  MESSAGE,
  RELEASE,
}

export interface Post {
  id: string;
  info: {
    name: string;
    avatar: string;
    location: string | null;
  };
  likes: number;
  comments: number;
  shares: number;
  post: {
    content: string;
    images: string[];
  };
}

export const selectData: Post[] = [
  {
    id: "1",
    info: {
      name: "Mirabelle Swift",
      avatar:
        "https://images.unsplash.com/photo-1519705733052-abc8faae00f6?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: null,
    },
    likes: 5233,
    comments: 189,
    shares: 238,
    post: {
      content: "Adwords Keyword Research For Beginners.",
      images: [
        "https://images.unsplash.com/photo-1519705733052-abc8faae00f6?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
    },
  },
  {
    id: "2",
    info: {
      name: "William Watts",
      avatar:
        "https://images.unsplash.com/profile-1636845830684-1e9199e57a5d?w=64&dpr=2&crop=faces&bg=%23fff&h=64&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      location: null,
    },
    likes: 9278,
    comments: 1089,
    shares: 2138,
    post: {
      content:
        "How to boost your traffic of your blog and destroy the competition.😏😏😋",
      images: [
        "https://images.unsplash.com/photo-1601758063890-1167f394febb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRvZ3N8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1601758176559-76c75ead317a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZG9nc3xlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1601758066233-2dc181fb3380?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRvZ3N8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRvZ3N8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1601758003122-53c40e686a19?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGRvZ3N8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1533404367653-794d4cecb66c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGRvZ3N8ZW58MHx8MHx8fDA%3D",
      ],
    },
  },
  {
    id: "3",
    info: {
      name: "Bundo Kim",
      avatar:
        "https://images.unsplash.com/profile-1522243949591-75c7f5ac1ffb?w=64&dpr=2&crop=faces&bg=%23fff&h=64&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      location: null,
    },
    likes: 78,
    comments: 19,
    shares: 3,
    post: {
      content:
        "A dog is a beloved, intelligent, and very loyal animal. So I like dogs very much.",
      images: [
        "https://images.unsplash.com/photo-1531738575367-08d4cd398bf9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGRvZ3N8ZW58MHx8MHx8fDA%3D",
      ],
    },
  },
];

export const discoverData: Post[] = [
  {
    id: "1",
    info: {
      name: "Jeremy Bishop",
      avatar:
        "https://images.unsplash.com/profile-1610519305252-c9d552283aaaimage?w=150&dpr=2&crop=faces&bg=%23fff&h=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      location: "Golden Retriever · Mobile ",
    },
    likes: 8668,
    comments: 168,
    shares: 368,
    post: {
      content:
        "With golden retriever together of the day is always short, soon to the New Year, leave you in the city.",
      images: [
        "https://images.unsplash.com/photo-1518882174711-1de40238921b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGRvZ3N8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1508814437933-f0c7d18a9217?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGRvZ3N8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1495953852792-8b6722cbd195?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGRvZ3N8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1647233506263-83cdd9f98c8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGRvZ3N8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1650930629267-293fd465fefb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fGRvZ3N8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1711955894472-687fc4f22cad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fGRvZ3N8ZW58MHx8MHx8fDA%3D",
      ],
    },
  },
  {
    id: "2",
    info: {
      name: "Valerie Elash",
      avatar:
        "https://images.unsplash.com/profile-1646498449187-31e424953763image?w=150&dpr=2&crop=faces&bg=%23fff&h=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      location: "Labrador Peninsula · Atlanta",
    },
    likes: 9020,
    comments: 600,
    shares: 668,
    post: {
      content:
        "Your dog is only a part of your world, but to your dog, you are the world.😊😊",
      images: [
        "https://images.unsplash.com/photo-1527351872720-dc4768c9b696?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGRvZ3N8ZW58MHx8MHx8fDA%3D",
      ],
    },
  },
];

export interface Circle {
  id: string;
  name: string;
  image: string;
  members: number;
}

export const popularCircle: Circle[] = [
  {
    id: "1",
    name: "Golden Retriever",
    image:
      "https://images.unsplash.com/photo-1422565096762-bdb997a56a84?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z29sZGVuJTIwcmV0cmlldmVyfGVufDB8fDB8fHww",
    members: 4377,
  },
  {
    id: "2",
    name: "Back of the head",
    image:
      "https://images.unsplash.com/photo-1650930629267-293fd465fefb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fGRvZ3N8ZW58MHx8MHx8fDA%3D",
    members: 423,
  },
  {
    id: "3",
    name: "Adopt",
    image:
      "https://images.unsplash.com/photo-1647233506263-83cdd9f98c8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGRvZ3N8ZW58MHx8MHx8fDA%3D",
    members: 603,
  },
  {
    id: "4",
    name: "Labrador Peninsula",
    image:
      "https://images.unsplash.com/photo-1685343425149-b4934140a2e9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGRvZ3N8ZW58MHx8MHx8fDA%3D",
    members: 1223,
  },
  {
    id: "5",
    name: "The life of a dog king",
    image:
      "https://images.unsplash.com/photo-1709777571247-39ad71a2d86e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGRvZ3N8ZW58MHx8MHx8fDA%3D",
    members: 4590,
  },
];
