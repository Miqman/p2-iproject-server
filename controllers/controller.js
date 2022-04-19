const { comparePass } = require("../helpers/bcrypt");
const { createTokenPayload } = require("../helpers/jwt");
const { User, post, postUser, Profile } = require("../models/index");
const axios = require("axios");

class Controller {
  static async register(req, res, next) {
    try {
      const { username, email, password } = req.body;

      const newUser = await User.create({
        username,
        email,
        password,
      });
      res.status(201).json({
        statusCode: 201,
        data: {
          id: newUser.id,
          email: newUser.email,
        },
      });
    } catch (error) {
      //   console.log(error);
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      // console.log(req.body, "=================");
      const getUserLogin = await User.findOne({
        where: { email },
      });

      if (!email) {
        throw { name: "email!" };
      }
      if (!password) {
        throw { name: "password!" };
      }

      if (!getUserLogin) {
        throw { name: "401" };
      }
      const getValidUser = comparePass(password, getUserLogin.password);

      if (!getValidUser) {
        throw { name: "401" };
      }

      const payload = { id: getUserLogin.id };
      // console.log(payload);

      const access_token = createTokenPayload(payload);
      //balikin data
      res.status(200).json({
        statusCode: 200,
        access_token: access_token,
        id: getUserLogin.id,
        username: getUserLogin.username,
      });
    } catch (error) {
      //   console.log(error);
      next(error);
    }
  }

  static async popular(req, res, next) {
    try {
      const getPopular = await axios({
        method: "get",
        url: "https://api.jikan.moe/v4/watch/promos/popular",
      });

      res.status(200).json({
        data: getPopular.data.data,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async showAll(req, res, next) {
    try {
      const getAnime = await axios({
        method: "get",
        url: "https://api.jikan.moe/v4/anime",
      });

      //   console.log(getAnime.data);
      res.status(200).json({
        data: getAnime.data,
      });
    } catch (error) {
      //   console.log(error);
      next(error);
    }
  }

  static async showOne(req, res, next) {
    try {
      const { id } = req.params;

      const getAnime = await axios({
        method: "get",
        url: `https://api.jikan.moe/v4/anime/${id}`,
      });

      if (getAnime <= 0) {
        throw { name: "Not_Found" };
      }

      //   console.log(getAnime.data);
      res.status(200).json({
        data: getAnime.data.data,
      });
    } catch (error) {
      //   console.log(error);
      next(error);
    }
  }

  static async getFavorite(req, res, next) {
    try {
      const { id } = req.user;
      const newFav = await postUser.findAll({
        where: { UserId: id },
        include: [
          { model: post, attributes: { exclude: ["createdAt", "updatedAt"] } },
          {
            model: User,
            attributes: { exclude: ["createdAt", "updatedAt"] },
          },
        ],
      });

      res.status(200).json({
        code: 200,
        data: newFav,
      });
    } catch (error) {
      // console.log(error);
      next(error);
    }
  }

  static async postFavorite(req, res, next) {
    try {
      const { fId } = req.params;
      const { id } = req.user;
      console.log(id, fId, "============");
      const getAnime = await axios({
        method: "get",
        url: `https://api.jikan.moe/v4/anime/${fId}`,
      });

      let getGenre = getAnime.data.data.genres;
      getGenre = getGenre.map((el) => el.name);
      let genre = getGenre.join(", ");

      let getLicen = getAnime.data.data.licensors;
      getLicen = getLicen.map((el) => el.name);
      let licensi = getLicen.join(", ");

      if (!getAnime.data.data.year) {
        getAnime.data.data.year = "-";
      }
      if (!getAnime.data.data.season) {
        getAnime.data.data.season = "-";
      }

      if (getAnime) {
        const idPost = await post.create({
          name: getAnime.data.data.title,
          synopsis: getAnime.data.data.synopsis,
          score: getAnime.data.data.score,
          rank: getAnime.data.data.rank,
          episodes: getAnime.data.data.episodes,
          favorite: getAnime.data.data.favorites,
          season: getAnime.data.data.season,
          genres: genre,
          year: getAnime.data.data.year,
          titleJ: getAnime.data.data.title_japanese,
          licencor: licensi,
        });

        const getFav = await postUser.create({ UserId: id, PostId: idPost.id });
        res.status(201).json({
          data: getFav,
        });
      } else {
        throw { name: "Not Found" };
      }
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

module.exports = Controller;
