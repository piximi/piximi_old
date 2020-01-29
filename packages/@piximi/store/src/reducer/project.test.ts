import {Category, Image, Partition, Project, Score} from "@piximi/types";

import * as actions from "../actions";
import * as project from "./project";

it("createCategoryAction", () => {
  const state: Project = {
    categories: [
      {
        description: "Unknown",
        identifier: "00000000-0000-0000-0000-000000000000",
        index: 0,
        visualization: {
          color: "rgb(233, 165, 177)",
          visible: true
        }
      }
    ],
    images: [],
    name: "Untitled classifier"
  };

  const category: Category = {
    description: "example",
    identifier: "11111111-1111-1111-1111-11111111111",
    index: 1,
    visualization: {
      color: "#FFFFFF",
      visible: true
    }
  };

  const payload = {
    category: category
  };

  const action = actions.createCategoryAction(payload);

  const reducer = project.reducer(state, action);

  const expected: Project = {
    categories: [
      {
        description: "Unknown",
        identifier: "00000000-0000-0000-0000-000000000000",
        index: 0,
        visualization: {
          color: "rgb(233, 165, 177)",
          visible: true
        }
      },
      {
        description: "example",
        identifier: "11111111-1111-1111-1111-11111111111",
        index: 1,
        visualization: {
          color: "#FFFFFF",
          visible: true
        }
      }
    ],
    images: [],
    name: "Untitled classifier"
  };

  expect(reducer).toEqual(expected);
});

it("createClassifierAction", () => {
  const state: Project = {
    categories: [
      {
        description: "Unknown",
        identifier: "00000000-0000-0000-0000-000000000000",
        index: 0,
        visualization: {
          color: "rgb(233, 165, 177)",
          visible: true
        }
      }
    ],
    images: [],
    name: "Untitled classifier"
  };

  const payload = {
    name: "example"
  };

  const action = actions.createProjectAction(payload);

  const reducer = project.reducer(state, action);

  const expected: Project = {
    categories: [
      {
        description: "Unknown",
        identifier: "00000000-0000-0000-0000-000000000000",
        index: 0,
        visualization: {
          color: "rgb(233, 165, 177)",
          visible: true
        }
      }
    ],
    images: [],
    name: "example"
  };

  expect(reducer).toEqual(expected);
});

it("openClassifierAction", () => {
  const state: Project = {
    categories: [
      {
        description: "Unknown",
        identifier: "00000000-0000-0000-0000-000000000000",
        index: 0,
        visualization: {
          color: "rgb(233, 165, 177)",
          visible: true
        }
      }
    ],
    images: [],
    name: "Untitled classifier"
  };

  const payload: Project = {
    categories: [
      {
        description: "Unknown",
        identifier: "00000000-0000-0000-0000-000000000000",
        index: 0,
        visualization: {
          color: "rgb(233, 165, 177)",
          visible: true
        }
      },
      {
        description: "1",
        identifier: "18be6295-dade-445e-a13f-e9f2268ac8e6",
        index: 0,
        visualization: {
          color: "#9c27b0",
          visible: true
        }
      },
      {
        description: "0",
        identifier: "789f08ed-fe80-4785-bdf6-0e7108ec29a3",
        index: 0,
        visualization: {
          color: "#00e676",
          visible: true
        }
      }
    ],
    images: [
      {
        categoryIdentifier: "00000000-0000-0000-0000-000000000000",
        checksum: "",
        data: "",
        identifier: "11111111-1111-1111-1111-11111111111",
        partition: Partition.Training,
        scores: [],
        visualization: {
          brightness: 0,
          contrast: 0,
          visible: true,
          visibleChannels: []
        }
      }
    ],
    name: "example"
  };

  const action = actions.openProjectAction(payload);

  const reducer = project.reducer(state, action);

  const expected: Project = {
    categories: [
      {
        description: "Unknown",
        identifier: "00000000-0000-0000-0000-000000000000",
        index: 0,
        visualization: {
          color: "rgb(233, 165, 177)",
          visible: true
        }
      },
      {
        description: "1",
        identifier: "18be6295-dade-445e-a13f-e9f2268ac8e6",
        index: 0,
        visualization: {
          color: "#9c27b0",
          visible: true
        }
      },
      {
        description: "0",
        identifier: "789f08ed-fe80-4785-bdf6-0e7108ec29a3",
        index: 0,
        visualization: {
          color: "#00e676",
          visible: true
        }
      }
    ],
    images: [
      {
        categoryIdentifier: "00000000-0000-0000-0000-000000000000",
        checksum: "",
        data: "",
        identifier: "11111111-1111-1111-1111-11111111111",
        partition: Partition.Training,
        scores: [],
        visualization: {
          brightness: 0,
          contrast: 0,
          visible: true,
          visibleChannels: []
        }
      }
    ],
    name: "example"
  };

  expect(reducer).toEqual(expected);
});

it("createImageAction", () => {
  const state: Project = {
    categories: [
      {
        description: "Unknown",
        identifier: "00000000-0000-0000-0000-000000000000",
        index: 0,
        visualization: {
          color: "rgb(233, 165, 177)",
          visible: true
        }
      }
    ],
    images: [],
    name: "Untitled classifier"
  };

  const image: Image = {
    categoryIdentifier: "00000000-0000-0000-0000-000000000000",
    checksum: "",
    data: "",
    identifier: "11111111-1111-1111-1111-11111111111",
    partition: Partition.Training,
    scores: [],
    visualization: {
      brightness: 0,
      contrast: 0,
      visible: true,
      visibleChannels: []
    }
  };

  const payload = {
    identifier: "11111111-1111-1111-1111-11111111111",
    image: image
  };

  const action = actions.createImageAction(payload);

  const reducer = project.reducer(state, action);

  const expected: Project = {
    categories: [
      {
        description: "Unknown",
        identifier: "00000000-0000-0000-0000-000000000000",
        index: 0,
        visualization: {
          color: "rgb(233, 165, 177)",
          visible: true
        }
      }
    ],
    images: [
      {
        categoryIdentifier: "00000000-0000-0000-0000-000000000000",
        checksum: "",
        data: "",
        identifier: "11111111-1111-1111-1111-11111111111",
        partition: Partition.Training,
        scores: [],
        visualization: {
          brightness: 0,
          contrast: 0,
          visible: true,
          visibleChannels: []
        }
      }
    ],
    name: "Untitled classifier"
  };

  expect(reducer).toEqual(expected);
});

it("createImagesAction", () => {
  const state: Project = {
    categories: [
      {
        description: "Unknown",
        identifier: "00000000-0000-0000-0000-000000000000",
        index: 0,
        visualization: {
          color: "rgb(233, 165, 177)",
          visible: true
        }
      }
    ],
    images: [
      {
        categoryIdentifier: "00000000-0000-0000-0000-000000000000",
        checksum: "",
        data: "",
        identifier: "11111111-1111-1111-1111-11111111111",
        partition: Partition.Training,
        scores: [],
        visualization: {
          brightness: 0,
          contrast: 0,
          visible: true,
          visibleChannels: []
        }
      }
    ],
    name: "Untitled classifier"
  };

  const images: Image[] = [
    {
      categoryIdentifier: "00000000-0000-0000-0000-000000000000",
      checksum: "",
      data: "",
      identifier: "11111111-1111-1111-2222-11111111111",
      partition: Partition.Training,
      scores: [],
      visualization: {
        brightness: 0,
        contrast: 0,
        visible: true,
        visibleChannels: []
      }
    },
    {
      categoryIdentifier: "00000000-0000-0000-0000-000000000000",
      checksum: "",
      data: "",
      identifier: "11111111-1111-1111-333-11111111111",
      partition: Partition.Training,
      scores: [],
      visualization: {
        brightness: 0,
        contrast: 0,
        visible: true,
        visibleChannels: []
      }
    }
  ];

  const payload = {
    images: images
  };

  const action = actions.createImagesAction(payload);

  const reducer = project.reducer(state, action);

  const expected: Project = {
    categories: [
      {
        description: "Unknown",
        identifier: "00000000-0000-0000-0000-000000000000",
        index: 0,
        visualization: {
          color: "rgb(233, 165, 177)",
          visible: true
        }
      }
    ],
    images: [
      {
        categoryIdentifier: "00000000-0000-0000-0000-000000000000",
        checksum: "",
        data: "",
        identifier: "11111111-1111-1111-1111-11111111111",
        partition: Partition.Training,
        scores: [],
        visualization: {
          brightness: 0,
          contrast: 0,
          visible: true,
          visibleChannels: []
        }
      },
      {
        categoryIdentifier: "00000000-0000-0000-0000-000000000000",
        checksum: "",
        data: "",
        identifier: "11111111-1111-1111-2222-11111111111",
        partition: Partition.Training,
        scores: [],
        visualization: {
          brightness: 0,
          contrast: 0,
          visible: true,
          visibleChannels: []
        }
      },
      {
        categoryIdentifier: "00000000-0000-0000-0000-000000000000",
        checksum: "",
        data: "",
        identifier: "11111111-1111-1111-333-11111111111",
        partition: Partition.Training,
        scores: [],
        visualization: {
          brightness: 0,
          contrast: 0,
          visible: true,
          visibleChannels: []
        }
      }
    ],
    name: "Untitled classifier"
  };

  expect(reducer).toEqual(expected);
});

it("createImageScoreAction", () => {
  const state: Project = {
    categories: [
      {
        description: "Unknown",
        identifier: "00000000-0000-0000-0000-000000000000",
        index: 0,
        visualization: {
          color: "rgb(233, 165, 177)",
          visible: true
        }
      },
      {
        description: "example",
        identifier: "11111111-1111-1111-1111-11111111111",
        index: 1,
        visualization: {
          color: "#FFFFFF",
          visible: true
        }
      }
    ],
    images: [
      {
        categoryIdentifier: "00000000-0000-0000-0000-000000000000",
        checksum: "",
        data: "",
        identifier: "22222222-2222-2222-1111-22222222222",
        partition: Partition.Training,
        scores: [],
        visualization: {
          brightness: 0,
          contrast: 0,
          visible: true,
          visibleChannels: []
        }
      },
      {
        categoryIdentifier: "00000000-0000-0000-0000-000000000000",
        checksum: "",
        data: "",
        identifier: "22222222-2222-2222-2222-22222222222",
        partition: Partition.Training,
        scores: [],
        visualization: {
          brightness: 0,
          contrast: 0,
          visible: true,
          visibleChannels: []
        }
      },
      {
        categoryIdentifier: "00000000-0000-0000-0000-000000000000",
        checksum: "",
        data: "",
        identifier: "22222222-2222-2222-3333-22222222222",
        partition: Partition.Training,
        scores: [],
        visualization: {
          brightness: 0,
          contrast: 0,
          visible: true,
          visibleChannels: []
        }
      }
    ],
    name: "Untitled classifier"
  };

  const scores: Score[][] = [
    [
      {
        categoryIdentifier: "11111111-1111-1111-1111-11111111111",
        probability: 0.8
      }
    ],
    [
      {
        categoryIdentifier: "11111111-1111-1111-1111-11111111111",
        probability: 0.3
      }
    ]
  ];

  const payload = {
    identifiers: [
      "22222222-2222-2222-2222-22222222222",
      "22222222-2222-2222-3333-22222222222"
    ],
    scores: scores
  };

  const action = actions.createImageScoreAction(payload);

  const reducer = project.reducer(state, action);

  const expected: Project = {
    categories: [
      {
        description: "Unknown",
        identifier: "00000000-0000-0000-0000-000000000000",
        index: 0,
        visualization: {
          color: "rgb(233, 165, 177)",
          visible: true
        }
      },
      {
        description: "example",
        identifier: "11111111-1111-1111-1111-11111111111",
        index: 1,
        visualization: {
          color: "#FFFFFF",
          visible: true
        }
      }
    ],
    images: [
      {
        categoryIdentifier: "00000000-0000-0000-0000-000000000000",
        checksum: "",
        data: "",
        identifier: "22222222-2222-2222-1111-22222222222",
        partition: Partition.Training,
        scores: [],
        visualization: {
          brightness: 0,
          contrast: 0,
          visible: true,
          visibleChannels: []
        }
      },
      {
        categoryIdentifier: "00000000-0000-0000-0000-000000000000",
        checksum: "",
        data: "",
        identifier: "22222222-2222-2222-2222-22222222222",
        partition: Partition.Training,
        scores: [
          {
            categoryIdentifier: "11111111-1111-1111-1111-11111111111",
            probability: 0.8
          }
        ],
        visualization: {
          brightness: 0,
          contrast: 0,
          visible: true,
          visibleChannels: []
        }
      },
      {
        categoryIdentifier: "00000000-0000-0000-0000-000000000000",
        checksum: "",
        data: "",
        identifier: "22222222-2222-2222-3333-22222222222",
        partition: Partition.Training,
        scores: [
          {
            categoryIdentifier: "11111111-1111-1111-1111-11111111111",
            probability: 0.3
          }
        ],
        visualization: {
          brightness: 0,
          contrast: 0,
          visible: true,
          visibleChannels: []
        }
      }
    ],
    name: "Untitled classifier"
  };

  expect(reducer).toEqual(expected);
});

it("deleteCategoryAction", () => {
  const state: Project = {
    categories: [
      {
        description: "Unknown",
        identifier: "00000000-0000-0000-0000-000000000000",
        index: 0,
        visualization: {
          color: "#FFFFFF",
          visible: true
        }
      },
      {
        description: "example",
        identifier: "11111111-1111-1111-1111-11111111111",
        index: 1,
        visualization: {
          color: "#FFFFFF",
          visible: true
        }
      }
    ],
    images: [
      {
        categoryIdentifier: "11111111-1111-1111-1111-11111111111",
        checksum: "",
        data: "",
        identifier: "22222222-2222-2222-2222-22222222222",
        partition: Partition.Training,
        scores: [],
        visualization: {
          brightness: 0,
          contrast: 0,
          visible: true,
          visibleChannels: []
        }
      }
    ],
    name: "Untitled classifier"
  };

  const payload = {
    identifier: "11111111-1111-1111-1111-11111111111"
  };

  const action = actions.deleteCategoryAction(payload);

  const reducer = project.reducer(state, action);

  const expected: Project = {
    categories: [
      {
        description: "Unknown",
        identifier: "00000000-0000-0000-0000-000000000000",
        index: 0,
        visualization: {
          color: "#FFFFFF",
          visible: true
        }
      }
    ],
    images: [
      {
        categoryIdentifier: "00000000-0000-0000-0000-000000000000",
        checksum: "",
        data: "",
        identifier: "22222222-2222-2222-2222-22222222222",
        partition: Partition.Training,
        scores: [],
        visualization: {
          brightness: 0,
          contrast: 0,
          visible: true,
          visibleChannels: []
        }
      }
    ],
    name: "Untitled classifier"
  };

  expect(reducer).toEqual(expected);
});

it("deleteImageAction", () => {
  const state: Project = {
    categories: [
      {
        description: "Unknown",
        identifier: "00000000-0000-0000-0000-000000000000",
        index: 0,
        visualization: {
          color: "#FFFFFF",
          visible: true
        }
      }
    ],
    images: [
      {
        categoryIdentifier: "00000000-0000-0000-0000-000000000000",
        checksum: "",
        data: "",
        identifier: "11111111-1111-1111-1111-11111111111",
        partition: Partition.Training,
        scores: [],
        visualization: {
          brightness: 0,
          contrast: 0,
          visible: true,
          visibleChannels: []
        }
      }
    ],
    name: "Untitled classifier"
  };

  const payload = {
    identifier: "11111111-1111-1111-1111-11111111111"
  };

  const action = actions.deleteImageAction(payload);

  const reducer = project.reducer(state, action);

  const expected: Project = {
    categories: [
      {
        description: "Unknown",
        identifier: "00000000-0000-0000-0000-000000000000",
        index: 0,
        visualization: {
          color: "#FFFFFF",
          visible: true
        }
      }
    ],
    images: [],
    name: "Untitled classifier"
  };

  expect(reducer).toEqual(expected);
});

it("toggleCategoryVisibilityAction", () => {
  const state: Project = {
    categories: [
      {
        description: "Unknown",
        identifier: "00000000-0000-0000-0000-000000000000",
        index: 0,
        visualization: {
          color: "rgb(233, 165, 177)",
          visible: true
        }
      },
      {
        description: "example",
        identifier: "11111111-1111-1111-1111-11111111111",
        index: 1,
        visualization: {
          color: "#FFFFFF",
          visible: true
        }
      }
    ],
    images: [],
    name: "Untitled classifier"
  };

  const payload = {
    identifier: "11111111-1111-1111-1111-11111111111"
  };

  const action = actions.toggleCategoryVisibilityAction(payload);

  const reducer = project.reducer(state, action);

  const expected: Project = {
    categories: [
      {
        description: "Unknown",
        identifier: "00000000-0000-0000-0000-000000000000",
        index: 0,
        visualization: {
          color: "rgb(233, 165, 177)",
          visible: true
        }
      },
      {
        description: "example",
        identifier: "11111111-1111-1111-1111-11111111111",
        index: 1,
        visualization: {
          color: "#FFFFFF",
          visible: false
        }
      }
    ],
    images: [],
    name: "Untitled classifier"
  };

  expect(reducer).toEqual(expected);
});

it("updateCategoryColorAction", () => {
  const state: Project = {
    categories: [
      {
        description: "Unknown",
        identifier: "00000000-0000-0000-0000-000000000000",
        index: 0,
        visualization: {
          color: "rgb(233, 165, 177)",
          visible: true
        }
      },
      {
        description: "example",
        identifier: "11111111-1111-1111-1111-11111111111",
        index: 1,
        visualization: {
          color: "#FFFFFF",
          visible: true
        }
      }
    ],
    images: [],
    name: "Untitled classifier"
  };

  const payload = {
    identifier: "11111111-1111-1111-1111-11111111111",
    color: "#000000"
  };

  const action = actions.updateCategoryColorAction(payload);

  const reducer = project.reducer(state, action);

  const expected: Project = {
    categories: [
      {
        description: "Unknown",
        identifier: "00000000-0000-0000-0000-000000000000",
        index: 0,
        visualization: {
          color: "rgb(233, 165, 177)",
          visible: true
        }
      },
      {
        description: "example",
        identifier: "11111111-1111-1111-1111-11111111111",
        index: 1,
        visualization: {
          color: "#000000",
          visible: true
        }
      }
    ],
    images: [],
    name: "Untitled classifier"
  };

  expect(reducer).toEqual(expected);
});

it("updateCategoryDescriptionAction", () => {
  const state: Project = {
    categories: [
      {
        description: "Unknown",
        identifier: "00000000-0000-0000-0000-000000000000",
        index: 0,
        visualization: {
          color: "rgb(233, 165, 177)",
          visible: true
        }
      },
      {
        description: "example",
        identifier: "11111111-1111-1111-1111-11111111111",
        index: 1,
        visualization: {
          color: "#FFFFFF",
          visible: true
        }
      }
    ],
    images: [],
    name: "Untitled classifier"
  };

  const payload = {
    description: "updated",
    identifier: "11111111-1111-1111-1111-11111111111"
  };

  const action = actions.updateCategoryDescriptionAction(payload);

  const reducer = project.reducer(state, action);

  const expected: Project = {
    categories: [
      {
        description: "Unknown",
        identifier: "00000000-0000-0000-0000-000000000000",
        index: 0,
        visualization: {
          color: "rgb(233, 165, 177)",
          visible: true
        }
      },
      {
        description: "updated",
        identifier: "11111111-1111-1111-1111-11111111111",
        index: 1,
        visualization: {
          color: "#FFFFFF",
          visible: true
        }
      }
    ],
    images: [],
    name: "Untitled classifier"
  };

  expect(reducer).toEqual(expected);
});

it("updateCategoryVisibilityAction", () => {
  const state: Project = {
    categories: [
      {
        description: "Unknown",
        identifier: "00000000-0000-0000-0000-000000000000",
        index: 0,
        visualization: {
          color: "rgb(233, 165, 177)",
          visible: true
        }
      },
      {
        description: "example",
        identifier: "11111111-1111-1111-1111-11111111111",
        index: 1,
        visualization: {
          color: "#FFFFFF",
          visible: true
        }
      }
    ],
    images: [],
    name: "Untitled classifier"
  };

  const payload = {
    identifier: "11111111-1111-1111-1111-11111111111",
    visible: false
  };

  const action = actions.updateCategoryVisibilityAction(payload);

  const reducer = project.reducer(state, action);

  const expected: Project = {
    categories: [
      {
        description: "Unknown",
        identifier: "00000000-0000-0000-0000-000000000000",
        index: 0,
        visualization: {
          color: "rgb(233, 165, 177)",
          visible: true
        }
      },
      {
        description: "example",
        identifier: "11111111-1111-1111-1111-11111111111",
        index: 1,
        visualization: {
          color: "#FFFFFF",
          visible: false
        }
      }
    ],
    images: [],
    name: "Untitled classifier"
  };

  expect(reducer).toEqual(expected);
});

it("updateClassifierNameAction", () => {
  const state: Project = {
    categories: [
      {
        description: "Unknown",
        identifier: "00000000-0000-0000-0000-000000000000",
        index: 0,
        visualization: {
          color: "rgb(233, 165, 177)",
          visible: true
        }
      }
    ],
    images: [],
    name: "Untitled classifier"
  };

  const payload = {
    name: "updated"
  };

  const action = actions.updateProjectNameAction(payload);

  const reducer = project.reducer(state, action);

  const expected: Project = {
    categories: [
      {
        description: "Unknown",
        identifier: "00000000-0000-0000-0000-000000000000",
        index: 0,
        visualization: {
          color: "rgb(233, 165, 177)",
          visible: true
        }
      }
    ],
    images: [],
    name: "updated"
  };

  expect(reducer).toEqual(expected);
});

it("updateImageBrightnessAction", () => {
  const state: Project = {
    categories: [
      {
        description: "Unknown",
        identifier: "00000000-0000-0000-0000-000000000000",
        index: 0,
        visualization: {
          color: "rgb(233, 165, 177)",
          visible: true
        }
      }
    ],
    images: [
      {
        categoryIdentifier: "00000000-0000-0000-0000-000000000000",
        checksum: "",
        data: "",
        identifier: "11111111-1111-1111-1111-11111111111",
        partition: Partition.Training,
        scores: [],
        visualization: {
          brightness: 0,
          contrast: 0,
          visible: true,
          visibleChannels: []
        }
      }
    ],
    name: "Untitled classifier"
  };

  const payload = {
    brightness: 1,
    identifier: "11111111-1111-1111-1111-11111111111"
  };

  const action = actions.updateImageBrightnessAction(payload);

  const reducer = project.reducer(state, action);

  const expected: Project = {
    categories: [
      {
        description: "Unknown",
        identifier: "00000000-0000-0000-0000-000000000000",
        index: 0,
        visualization: {
          color: "rgb(233, 165, 177)",
          visible: true
        }
      }
    ],
    images: [
      {
        categoryIdentifier: "00000000-0000-0000-0000-000000000000",
        checksum: "",
        data: "",
        identifier: "11111111-1111-1111-1111-11111111111",
        partition: Partition.Training,
        scores: [],
        visualization: {
          brightness: 1,
          contrast: 0,
          visible: true,
          visibleChannels: []
        }
      }
    ],
    name: "Untitled classifier"
  };

  expect(reducer).toEqual(expected);
});

it("updateImageCategoryAction", () => {
  const state: Project = {
    categories: [
      {
        description: "Unknown",
        identifier: "00000000-0000-0000-0000-000000000000",
        index: 0,
        visualization: {
          color: "rgb(233, 165, 177)",
          visible: true
        }
      },
      {
        description: "example",
        identifier: "11111111-1111-1111-1111-11111111111",
        index: 1,
        visualization: {
          color: "#FFFFFF",
          visible: true
        }
      }
    ],
    images: [
      {
        categoryIdentifier: "00000000-0000-0000-0000-000000000000",
        checksum: "",
        data: "",
        identifier: "22222222-2222-2222-2222-22222222222",
        partition: Partition.Training,
        scores: [],
        visualization: {
          brightness: 0,
          contrast: 0,
          visible: true,
          visibleChannels: []
        }
      }
    ],
    name: "Untitled classifier"
  };

  const payload = {
    identifier: "22222222-2222-2222-2222-22222222222",
    categoryIdentifier: "11111111-1111-1111-1111-11111111111"
  };

  const action = actions.updateImageCategoryAction(payload);

  const reducer = project.reducer(state, action);

  const expected: Project = {
    categories: [
      {
        description: "Unknown",
        identifier: "00000000-0000-0000-0000-000000000000",
        index: 0,
        visualization: {
          color: "rgb(233, 165, 177)",
          visible: true
        }
      },
      {
        description: "example",
        identifier: "11111111-1111-1111-1111-11111111111",
        index: 1,
        visualization: {
          color: "#FFFFFF",
          visible: true
        }
      }
    ],
    images: [
      {
        categoryIdentifier: "11111111-1111-1111-1111-11111111111",
        checksum: "",
        data: "",
        identifier: "22222222-2222-2222-2222-22222222222",
        partition: Partition.Training,
        scores: [],
        visualization: {
          brightness: 0,
          contrast: 0,
          visible: true,
          visibleChannels: []
        }
      }
    ],
    name: "Untitled classifier"
  };

  expect(reducer).toEqual(expected);
});

it("updateImagesCategoryAction", () => {
  const state: Project = {
    categories: [
      {
        description: "Unknown",
        identifier: "00000000-0000-0000-0000-000000000000",
        index: 0,
        visualization: {
          color: "rgb(233, 165, 177)",
          visible: true
        }
      },
      {
        description: "example",
        identifier: "11111111-1111-1111-1111-11111111111",
        index: 1,
        visualization: {
          color: "#FFFFFF",
          visible: true
        }
      }
    ],
    images: [
      {
        categoryIdentifier: "00000000-0000-0000-0000-000000000000",
        checksum: "",
        data: "",
        identifier: "22222222-2222-2222-1111-22222222222",
        partition: Partition.Training,
        scores: [],
        visualization: {
          brightness: 0,
          contrast: 0,
          visible: true,
          visibleChannels: []
        }
      },
      {
        categoryIdentifier: "00000000-0000-0000-0000-000000000000",
        checksum: "",
        data: "",
        identifier: "22222222-2222-2222-2222-22222222222",
        partition: Partition.Training,
        scores: [],
        visualization: {
          brightness: 0,
          contrast: 0,
          visible: true,
          visibleChannels: []
        }
      },
      {
        categoryIdentifier: "00000000-0000-0000-0000-000000000000",
        checksum: "",
        data: "",
        identifier: "22222222-2222-2222-3333-22222222222",
        partition: Partition.Training,
        scores: [],
        visualization: {
          brightness: 0,
          contrast: 0,
          visible: true,
          visibleChannels: []
        }
      }
    ],
    name: "Untitled classifier"
  };

  const payload = {
    identifiers: [
      "22222222-2222-2222-1111-22222222222",
      "22222222-2222-2222-2222-22222222222",
      "22222222-2222-2222-3333-22222222222"
    ],
    categoryIdentifier: "11111111-1111-1111-1111-11111111111"
  };

  const action = actions.updateImagesCategoryAction(payload);

  const reducer = project.reducer(state, action);

  const expected: Project = {
    categories: [
      {
        description: "Unknown",
        identifier: "00000000-0000-0000-0000-000000000000",
        index: 0,
        visualization: {
          color: "rgb(233, 165, 177)",
          visible: true
        }
      },
      {
        description: "example",
        identifier: "11111111-1111-1111-1111-11111111111",
        index: 1,
        visualization: {
          color: "#FFFFFF",
          visible: true
        }
      }
    ],
    images: [
      {
        categoryIdentifier: "11111111-1111-1111-1111-11111111111",
        checksum: "",
        data: "",
        identifier: "22222222-2222-2222-1111-22222222222",
        partition: Partition.Training,
        scores: [],
        visualization: {
          brightness: 0,
          contrast: 0,
          visible: true,
          visibleChannels: []
        }
      },
      {
        categoryIdentifier: "11111111-1111-1111-1111-11111111111",
        checksum: "",
        data: "",
        identifier: "22222222-2222-2222-2222-22222222222",
        partition: Partition.Training,
        scores: [],
        visualization: {
          brightness: 0,
          contrast: 0,
          visible: true,
          visibleChannels: []
        }
      },
      {
        categoryIdentifier: "11111111-1111-1111-1111-11111111111",
        checksum: "",
        data: "",
        identifier: "22222222-2222-2222-3333-22222222222",
        partition: Partition.Training,
        scores: [],
        visualization: {
          brightness: 0,
          contrast: 0,
          visible: true,
          visibleChannels: []
        }
      }
    ],
    name: "Untitled classifier"
  };

  expect(reducer).toEqual(expected);
});

it("updateImageContrastAction", () => {
  const state: Project = {
    categories: [
      {
        description: "Unknown",
        identifier: "00000000-0000-0000-0000-000000000000",
        index: 0,
        visualization: {
          color: "rgb(233, 165, 177)",
          visible: true
        }
      }
    ],
    images: [
      {
        categoryIdentifier: "00000000-0000-0000-0000-000000000000",
        checksum: "",
        data: "",
        identifier: "11111111-1111-1111-1111-11111111111",
        partition: Partition.Training,
        scores: [],
        visualization: {
          brightness: 0,
          contrast: 0,
          visible: true,
          visibleChannels: []
        }
      }
    ],
    name: "Untitled classifier"
  };

  const payload = {
    contrast: 1,
    identifier: "11111111-1111-1111-1111-11111111111"
  };

  const action = actions.updateImageContrastAction(payload);

  const reducer = project.reducer(state, action);

  const expected: Project = {
    categories: [
      {
        description: "Unknown",
        identifier: "00000000-0000-0000-0000-000000000000",
        index: 0,
        visualization: {
          color: "rgb(233, 165, 177)",
          visible: true
        }
      }
    ],
    images: [
      {
        categoryIdentifier: "00000000-0000-0000-0000-000000000000",
        checksum: "",
        data: "",
        identifier: "11111111-1111-1111-1111-11111111111",
        partition: Partition.Training,
        scores: [],
        visualization: {
          brightness: 0,
          contrast: 1,
          visible: true,
          visibleChannels: []
        }
      }
    ],
    name: "Untitled classifier"
  };

  expect(reducer).toEqual(expected);
});

it("updateImageVisibilityAction", () => {
  const state: Project = {
    categories: [
      {
        description: "Unknown",
        identifier: "00000000-0000-0000-0000-000000000000",
        index: 0,
        visualization: {
          color: "rgb(233, 165, 177)",
          visible: true
        }
      }
    ],
    images: [
      {
        categoryIdentifier: "00000000-0000-0000-0000-000000000000",
        checksum: "",
        data: "",
        identifier: "11111111-1111-1111-1111-11111111111",
        partition: Partition.Training,
        scores: [],
        visualization: {
          brightness: 0,
          contrast: 0,
          visible: true,
          visibleChannels: []
        }
      }
    ],
    name: "Untitled classifier"
  };

  const payload = {
    identifiers: ["11111111-1111-1111-1111-11111111111"],
    visible: false
  };

  const action = actions.updateImageVisibilityAction(payload);

  const reducer = project.reducer(state, action);

  const expected: Project = {
    categories: [
      {
        description: "Unknown",
        identifier: "00000000-0000-0000-0000-000000000000",
        index: 0,
        visualization: {
          color: "rgb(233, 165, 177)",
          visible: true
        }
      }
    ],
    images: [
      {
        categoryIdentifier: "00000000-0000-0000-0000-000000000000",
        checksum: "",
        data: "",
        identifier: "11111111-1111-1111-1111-11111111111",
        partition: Partition.Training,
        scores: [],
        visualization: {
          brightness: 0,
          contrast: 0,
          visible: false,
          visibleChannels: []
        }
      }
    ],
    name: "Untitled classifier"
  };

  expect(reducer).toEqual(expected);
});

it("updateImagesPartitionAction", () => {
  const state: Project = {
    categories: [
      {
        description: "Unknown",
        identifier: "00000000-0000-0000-0000-000000000000",
        index: 0,
        visualization: {
          color: "rgb(233, 165, 177)",
          visible: true
        }
      }
    ],
    images: [
      {
        categoryIdentifier: "00000000-0000-0000-0000-000000000000",
        checksum: "",
        data: "",
        identifier: "11111111-1111-1111-1111-11111111111",
        partition: Partition.Training,
        scores: [],
        visualization: {
          brightness: 0,
          contrast: 0,
          visible: true,
          visibleChannels: []
        }
      },
      {
        categoryIdentifier: "00000000-0000-0000-0000-000000000000",
        checksum: "",
        data: "",
        identifier: "11111111-1111-1111-2222-11111111111",
        partition: Partition.Training,
        scores: [],
        visualization: {
          brightness: 0,
          contrast: 0,
          visible: true,
          visibleChannels: []
        }
      },
      {
        categoryIdentifier: "00000000-0000-0000-1111-000000000000",
        checksum: "",
        data: "",
        identifier: "11111111-1111-1111-3333-11111111111",
        partition: Partition.Training,
        scores: [],
        visualization: {
          brightness: 0,
          contrast: 0,
          visible: true,
          visibleChannels: []
        }
      }
    ],
    name: "Untitled classifier"
  };

  const payload = {partitions: [0, 1, 2]};

  const action = actions.updateImagesPartitionAction(payload);

  const reducer = project.reducer(state, action);

  const expected: Project = {
    categories: [
      {
        description: "Unknown",
        identifier: "00000000-0000-0000-0000-000000000000",
        index: 0,
        visualization: {
          color: "rgb(233, 165, 177)",
          visible: true
        }
      }
    ],
    images: [
      {
        categoryIdentifier: "00000000-0000-0000-0000-000000000000",
        checksum: "",
        data: "",
        identifier: "11111111-1111-1111-1111-11111111111",
        partition: Partition.Training,
        scores: [],
        visualization: {
          brightness: 0,
          contrast: 0,
          visible: true,
          visibleChannels: []
        }
      },
      {
        categoryIdentifier: "00000000-0000-0000-0000-000000000000",
        checksum: "",
        data: "",
        identifier: "11111111-1111-1111-2222-11111111111",
        partition: Partition.Validation,
        scores: [],
        visualization: {
          brightness: 0,
          contrast: 0,
          visible: true,
          visibleChannels: []
        }
      },
      {
        categoryIdentifier: "00000000-0000-0000-1111-000000000000",
        checksum: "",
        data: "",
        identifier: "11111111-1111-1111-3333-11111111111",
        partition: Partition.Test,
        scores: [],
        visualization: {
          brightness: 0,
          contrast: 0,
          visible: true,
          visibleChannels: []
        }
      }
    ],
    name: "Untitled classifier"
  };

  expect(reducer).toEqual(expected);
});
