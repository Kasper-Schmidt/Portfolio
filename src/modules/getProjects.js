import{ ref } from 'vue'

export default function getProjects() {

    let projects = ref([

        {
   projectID: 1,
   projectTitle: "Telesikring",
   projectDescription: "Webdesign for Telesikring",
   projectURL: require("../assets/Telesikringforside.jpg"),
   projectCategory: "Webdesign",
 },
 {
   projectID: 2,
   projectTitle: "Mini Me",
   projectDescription: "En illustration af mig tegnet i Adobe Illustrator",
   projectURL: require("../assets/MiniMe.jpg"),
   projectCategory: "Drawing",
 },

         {
   projectID: 3,
   projectTitle: "Verner Panton Hjemmeside",
   projectDescription: "Hjemmeside der omhandler Verner Panton",
   projectURL: require("../assets/vernerpantonforside.jpg"),
   projectCategory: "Web",
 },
      {
   projectID: 4,
   projectTitle: "Halloween Fest",
   projectDescription: "Plakat til Halloween fest",
   projectURL: require("../assets/halloweenforside.jpg"),
   projectCategory: "Drawing",
 },
      {
   projectID: 5,
   projectTitle: "Esbjerg Reklamevideo",
   projectDescription: "Reklamevideo for vores Esbjerg Event Festival i projektuge",
   projectURL: "https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvamVjdHN8ZW58MHx8MHx8&w=1000&q=80",
   projectCategory: "Video",
 },
      {
   projectID: 6,
   projectTitle: "Esbjerg Reklamevideo",
   projectDescription: "Reklamevideo for vores Esbjerg Event Festival i projektuge",
   projectURL: "https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvamVjdHN8ZW58MHx8MHx8&w=1000&q=80",
   projectCategory: "Video",
 },
       {
   projectID: 7,
   projectTitle: "Video Portfolio",
   projectDescription: "Videoportfolio af mig",
   projectURL: "https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvamVjdHN8ZW58MHx8MHx8&w=1000&q=80",
   projectCategory: "Video",
 },
  {
   projectID: 8,
   projectTitle: "Nirvana",
   projectDescription: "Hjemmeside om Nirvana",
   projectURL: "https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvamVjdHN8ZW58MHx8MHx8&w=1000&q=80",
   projectCategory: "Web",
 }, 
])

return {
 projects,

}
}