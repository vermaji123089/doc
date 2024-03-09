import React from "react";
import logo from "../../assets/images/logo.png";
import "./dash.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AdminDashBoard = () => {
  const user = useSelector((state) => state.admin.users);
  const docters = useSelector((state) => state.docters.docters);    
  console.log(user && user.length);
  // console.log(user);
// {user.map(user => (
//   <div key={user._id}>
//     <p>Email: {user.email}</p>
//     <p>Name: {user.name}</p>
//     <p>Number: {user.number}</p>
//     {/* Add other user details as needed */}
//   </div>
// ))}
  return (
    <div>
      
      <div className="content">
        <header className="headerD">
          <p>
            <label htmlFor="menu">
              <span className="fa fa-bars">
                <GiHamburgerMenu />
              </span>
            </label>
            <span className="accueil"></span>
          </p>
        </header>

        <main>
          <div className="cards">
            <div className="card-single">
              <div>
              {/* {user.map(user=>(
                  <h2 key={user._id} ></h2>
              ))} */}
            {user ? (user && <h2>{user.length}</h2>) : (<h2>5</h2>)}
                <small>Users</small>
              </div>
              <div>
                <span className="fa fa-shopping-cart"></span>
              </div>
            </div>

            <div className="card-single">
              <div>
              {user ? (user && <h2>{docters ? docters.length : 0}</h2>) : (<h2>5</h2>)}

                <small>Docters</small>
              </div>
              <div>
                <span className="fa fa-newspaper-o"></span>
              </div>
            </div>
            <div className="card-single">
              <div>
                <h2>58</h2>
                <small>Fournisseur</small>
              </div>
              <div>
                <span className="fa fa-outdent"></span>
              </div>
            </div>
            <div className="card-single">
              <div>
                <h2>20k</h2>
                <small>Communauté</small>
              </div>
              <div>
                <span className="fa fa-group"></span>
              </div>
            </div>
          </div>

          <div className="composant">
            <div className="ventes">
              <div className="case">
                <div className="header-case">
                  <h2>Listes produits</h2>
                  <Link to="/admin/doclistadmin" className="button">
                    Go to List<span className="fa fa-arrow-right"></span>
                  </Link>
                </div>
                <div className="body-case">
                  <div className="tableau">
                    <table width="100%">
                      <thead>
                        <tr>
                          <td>Name</td>
                          <td>email</td>
                          <td>Phnne</td>
                          <td>specialization</td>
                          <td>Price</td>
                        </tr>
                      </thead>
                      <tbody>
                        {docters ? (
                        docters &&  docters.map((doc) => (
                            <tr key={doc._id}>
                              <td>{doc.name}</td>
                              <td>{doc.email}</td>
                              <td>
                                <span className="status-produit color-one"></span>
                                {doc.phone}
                              </td>
                              <td>{doc.specialization}</td>
                              <td>{doc.price}</td>

                              {/* <td>
                                <button
                                  style={{ color: "red" }}
                                  onClick={() => handleDelete(doc._id)}
                                >
                                  delete
                                </button>
                                {"  /"}

                                <button
                                  style={{ color: "green" }}
                                  onClick={() => handleOpenModalN(doc._id)}
                                >
                                  edit
                                </button>
                              </td> */}
                            </tr>
                          ))
                          
                          ):
                          (
                            <div className="body-case">
                            <div className="tableau">
                              <table width="100%">
                                <thead>
                                  <tr>
                                    <td>Name</td>
                                    <td>email</td>
                                    <td>Phnne</td>
                                    <td>specialization</td>
                                    <td>Price</td>
                                  </tr>
                                </thead>
                                <tbody>
                                 
                                      <tr>
                                        <td>kon</td>
                                        <td>kon</td>
                                        <td>
                                          <span className="status-produit color-one"></span>
                                          kon
                                        </td>
                                        <td>kon</td>
                                        <td>kon</td>
                                      </tr>
                                  
                                </tbody>
                              </table>
                            </div>
                          </div>
                          )
                        }
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div className="stock">
              <div className="case">
                <div className="header-case">
                  <h2>Clients Fidèles</h2>
                </div>
                <div className="body-case">
                  <div className="all-users">
                    <div className="infos">
                      <img src="images/pp.jpg" width="30" height="30" />
                      <div>
                        <h4>Omar</h4>
                        <small>Embulant</small>
                      </div>
                    </div>

                    <div className="user-contact">
                      <span className="fa fa-facebook"></span>
                      <span className="fa fa-whatsapp"></span>
                      <span className="fa fa-phone"></span>
                    </div>
                  </div>

                  <div className="all-users">
                    <div className="infos">
                      <img src="images/pp.jpg" width="30" height="30" />
                      <div>
                        <h4>Omar</h4>
                        <small>Embulant</small>
                      </div>
                    </div>

                    <div className="user-contact">
                      <span className="fa fa-facebook"></span>
                      <span className="fa fa-whatsapp"></span>
                      <span className="fa fa-phone"></span>
                    </div>
                  </div>

                  <div className="all-users">
                    <div className="infos">
                      <img src="images/pp.jpg" width="30" height="30" />
                      <div>
                        <h4>Omar</h4>
                        <small>Embulant</small>
                      </div>
                    </div>

                    <div className="user-contact">
                      <span className="fa fa-facebook"></span>
                      <span className="fa fa-whatsapp"></span>
                      <span className="fa fa-phone"></span>
                    </div>
                  </div>

                  <div className="all-users">
                    <div className="infos">
                      <img src="images/pp.jpg" width="30" height="30" />
                      <div>
                        <h4>Omar</h4>
                        <small>Embulant</small>
                      </div>
                    </div>

                    <div className="user-contact">
                      <span className="fa fa-facebook"></span>
                      <span className="fa fa-whatsapp"></span>
                      <span className="fa fa-phone"></span>
                    </div>
                  </div>
                </div>
                <button className="btn">
                  voir plus<span className="fa fa-arrow-right"></span>
                </button>
              </div>
            </div>

            <div className="statistique">
              <div className="statistique-barre bar1"></div>
              <div className="statistique-barre bar2"></div>
              <div className="statistique-barre bar3"></div>
              <div className="statistique-barre bar4"></div>
              <div className="statistique-barre bar5"></div>
              <div className="statistique-barre bar6"></div>
              <div className="statistique-barre bar5"></div>
              <div className="statistique-barre bar6"></div>
              <div className="statistique-barre bar5"></div>
              <div className="statistique-barre bar6"></div>
              <div className="statistique-barre bar4"></div>
              <div className="statistique-barre bar5"></div>
              <div className="statistique-barre bar6"></div>
            </div>
            <div className="legende">
              <h4>Legende</h4>
              <table>
                <tr>
                  <td>
                    <span className="evolution color-one"></span>Riz
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="evolution color-two"></span>Mil
                  </td>
                </tr>
              </table>
              <div className="txt-deco">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo
                </p>
              </div>
            </div>
          </div>

          <div className="calendar">
            <div className="mois-annee">
              <ul>
                <li className="prev">&#10094;</li>
                <li className="next">&#10095;</li>
                <li>
                  Avril
                  <br />
                  <span>2021</span>
                </li>
              </ul>
            </div>

            <ul className="mois">
              <li>Mo</li>
              <li>Tu</li>
              <li>We</li>
              <li>Th</li>
              <li>Fr</li>
              <li>Sa</li>
              <li>Su</li>
            </ul>

            <ul className="jours">
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
              <li>8</li>
              <li>9</li>
              <li>
                <span className="active">10</span>
              </li>
              <li>11</li>
              <li>12</li>
              <li>13</li>
              <li>14</li>
              <li>15</li>
              <li>16</li>
              <li>17</li>
              <li>18</li>
              <li>19</li>
              <li>20</li>
              <li>21</li>
              <li>22</li>
              <li>23</li>
              <li>24</li>
              <li>25</li>
              <li>26</li>
              <li>27</li>
              <li>28</li>
              <li>29</li>
              <li>30</li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashBoard;
