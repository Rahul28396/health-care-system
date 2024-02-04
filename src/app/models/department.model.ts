export class Department {
    id: number;
    name: string;
    description: string;
    image: string;
    members: Array<string>;

    constructor(id: number, name: string, description: string, image: string, members: Array<string>) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.image =  image;
        this.members = members;
    }
}

export const departments : Array<Department> = [
    {
        id: 1,
        name: "Cardiology",
        description: "Cardiology is the study of the heart. Cardiology is a branch of medicine that deals with disorders of the heart and the cardiovascular system. The field includes medical diagnosis and treatment of congenital heart defects, coronary artery disease, heart failure, valvular heart disease, and electrophysiology.",
        image: 'assets/images/department-1.jpg',
        members: []
    },
    {
        id: 2,
        name: "Dentistry",
        description: "Dentistry, also known as dental medicine and oral medicine, is the branch of medicine focused on the teeth, gums, and mouth. It consists of the study, diagnosis, prevention, management, and treatment of diseases, disorders, and conditions of the mouth, most commonly focused on dentition as well as the oral mucosa.",
        image: 'assets/images/department-2.jpg',
        members: []
    },
    {
        id: 3,
        name: "Laboratory",
        description: "Cardiology is the study of the heart. Cardiology is a branch of medicine that deals with disorders of the heart and the cardiovascular system. The field includes medical diagnosis and treatment of congenital heart defects, coronary artery disease, heart failure, valvular heart disease, and electrophysiology.",
        image: 'assets/images/department-3.jpg',
        members: []
    },
    {
        id: 4,
        name: "Cardiology",
        description: "Cardiology is the study of the heart. Cardiology is a branch of medicine that deals with disorders of the heart and the cardiovascular system. The field includes medical diagnosis and treatment of congenital heart defects, coronary artery disease, heart failure, valvular heart disease, and electrophysiology.",
        image: 'assets/images/department-4.jpg',
        members: []
    },
    {
        id: 5,
        name: "Cardiology",
        description: "Cardiology is the study of the heart. Cardiology is a branch of medicine that deals with disorders of the heart and the cardiovascular system. The field includes medical diagnosis and treatment of congenital heart defects, coronary artery disease, heart failure, valvular heart disease, and electrophysiology.",
        image: 'assets/images/department-5.jpg',
        members: []
    },
    {
        id: 6,
        name: "Cardiology",
        description: "Cardiology is the study of the heart. Cardiology is a branch of medicine that deals with disorders of the heart and the cardiovascular system. The field includes medical diagnosis and treatment of congenital heart defects, coronary artery disease, heart failure, valvular heart disease, and electrophysiology.",
        image: 'assets/images/department-6.jpg',
        members: []
    }
]