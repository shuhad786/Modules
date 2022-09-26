// const ContactPage = () => {
//   document.getElementById('contactLink').addEventListener('click', () => {
//     document.getElementById('addPage').classList = 'displayNone';
//     document.getElementById('listPage').classList = 'displayNone';
//     document.getElementById('contactPage').classList = 'displayBlock';
//   });
// };

const ListPage = () => {
  document.getElementById('listLink').addEventListener('click', () => {
    document.getElementById('addPage').classList = 'displayNone';
    document.getElementById('listPage').classList = 'displayBlock';
    document.getElementById('contactPage').classList = 'displayNone';
  });
};

const AddPage = () => {
  document.getElementById('addLink').addEventListener('click', () => {
    document.getElementById('addPage').classList = 'displayBlock';
    document.getElementById('listPage').classList = 'displayNone';
    document.getElementById('contactPage').classList = 'displayNone';
  });
};

export { ListPage, AddPage, ContactPage };
