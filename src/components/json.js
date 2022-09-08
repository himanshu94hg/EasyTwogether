export const json =  {
    showProgressBar: "bottom", goNextPageAutomatic: true, showNavigationButtons: false,
    pages: [
      {
        "elements": [
          {
            "type": "imagepicker",
            "name": "first",
            "title": "How are you feeling today ?",
            "choices": [ 
              {
              "value": "Happy",
              "imageLink": "https://i.postimg.cc/63GjD0Jx/happyface.png",
              "text": "Happy",
              "imageWidth": "25px",
              "imageHeight": "25px"
            },
            {
              "value": "Calm",
              "imageLink": "https://i.postimg.cc/63GjD0Jx/happyface.png",
              "text": "Calm",
              "imageWidth": "25px",
              "imageHeight": "25px"
            },
            {
              "value": "Relax",
              "imageLink": "https://i.postimg.cc/63GjD0Jx/happyface.png",
              "text": "Relax",
              "imageWidth": "25px",
              "imageHeight": "25px"
            },
            {
              "value": "Focus",
              "imageLink": "https://i.postimg.cc/63GjD0Jx/happyface.png",
              "text": "Focus",
              "imageWidth": "25px",
              "imageHeight": "25px"
            } 
          ],
            "showLabel": true,
            "multiSelect": false
          }
        ]
      },
      
{
  "elements": [
    {
      "type": "radiogroup",
      "name": "gender",
      "title": "What is your gender identity?",
      "isRequired": true,
      "choices": [ "Male", "Female", "Other", "You do not wish to specify" ],
      "colCount": 0
    },
    
  ]
},
{
  "elements": [
    {
      "type": "radiogroup",
      "name": "married",
      "title": "Are you married?",
      "isRequired": true,
      "choices": [ "Yes", "No" ],
      "colCount": 0
    },
    {
      "type": "dropdown",
      "name": "years",
      "title": "How many years you are married?",
      "visibleIf": "{married}='Yes'",
      "isRequired": true,
      "choices": [ 1, 2, 3, 4, 5, 6, 7, 8 ]
    }
  ]
},


{
  "elements": [
    
    {
      "type": "dropdown",
      "name": "years",
      "title": "How old are you?",
      "isRequired": true,
      
      "choices": [ "Younger than 19", "20-30", "30-40", "40-50", "50-60", "older than 65" ]
    },
    {
      "type": "radiogroup",
      "name": "therapy",
      "title": "What type of therapy are you looking for?",
      "isRequired": true,
      "choices": [ "Individual", "Couples", "Teen" ],
      "colCount": 0
    }
    
  ]
},

     
      
    ],
    completedHtml: "<p><b>Thank you for answering<b></p>"
};
