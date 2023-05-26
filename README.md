# Online Resource API

<p>
  <a href="https://github.com/ralacerda/online-resources-api/blob/main/LICENSE"><img src=https://img.shields.io/badge/license-MIT-sucess /></a>
  <a href="https://stats.uptimerobot.com/Kl174uDRPq"><img src="https://img.shields.io/uptimerobot/status/m794413195-f1c3e4c8eba4885d2496e964?label=status(aws)" /></a>
  <a href="https://stats.uptimerobot.com/Kl174uDRPq"><img src="https://img.shields.io/uptimerobot/ratio/7/m794413195-f1c3e4c8eba4885d2496e964?label=uptime(aws)" /></a>
    <a href="https://stats.uptimerobot.com/Kl174uDRPq"><img src="https://img.shields.io/uptimerobot/status/m794413207-fbb77af56495985f9c5cbbad?label=status(render)" /></a>
  <a href="https://stats.uptimerobot.com/Kl174uDRPq"><img src="https://img.shields.io/uptimerobot/ratio/7/m794413207-fbb77af56495985f9c5cbbad?label=uptime(render)" /></a>
 </p>
 
This express API provides a collection of mostly free online resources for developers, including free fonts, open source icons, and CC0 illustrations. It aims to assist developers in easily finding and accessing these valuable resources.

The API is currently hosted on Render and on AWS, while the Mongo Database is hosted on Mongo Atlas. I'm using Free Tiers, so please be patient if response times are slightly slower. Using the AWS endpoint should be faster but it's only avaliable through HTTP. The API includes headers for a 4-hour cache.

Please refer to the API reference below for instructions on how to use the API effectively.

## Motivation

The project was born out of the need to discover and access free resources while developing personal web projects. As developers, we often seek high-quality fonts, icons, illustrations, and photos to enhance our creations. Over time, I accumulated a bookmark folder filled with websites that provide these resources for free or under permisse licenses. Realizing the value of this collection, I decided to share it with other developers, enabling them to save time and effort in their own projects.

This project also serves as an opportunity for me to improve my skills in building Express APIs, leveraging TypeScript, and working with MongoDB.

## API Reference

### Endpoint

You can acess the API at the following endpoints:

- https://online-resources-api.onrender.com/api/
- http://ec2-54-207-254-251.sa-east-1.compute.amazonaws.com/api

### Resources

All resources have the following properties

| Property      | Type       | Description                                    |
| :------------ | :--------- | :--------------------------------------------- |
| `name`        | `string`   | Name of the resource                           |
| `url `        | `string`   | Link to the resource url                       |
| `description` | `string`   | A short description of the resource            |
| `tags`        | `string[]` | List of tags for the resource                  |
| `screenshot`  | `string`   | Link to a screenshot from the resource website |

### Get resources

```
  GET /api/
```

Returns a list of resources.

| Parameter | Type     | Description                                                                                |
| :-------- | :------- | :----------------------------------------------------------------------------------------- |
| `limit`   | `number` | How many resources to include in the response. If omitted, every resource will be included |
| `skip`    | `number` | How many resources to skip. Useful for pagination. Default to 0                            |
| `search`  | `string` | An optional string for search.                                                             |

### Get list of tags

```
  GET /api/tags/
```

Returns an array of objects, each object represent a unique tag. Each object has the following shape:

| Property | Type     | Description                      |
| :------- | :------- | :------------------------------- |
| `name`   | `string` | Name of the tag                  |
| `count ` | `number` | How many resources have that tag |

### Get resource by tag

```
  GET /api/tag/{$tag}
```

Returns a list of all resources that have the specified tag.

| Parameter | Type     | Description           |
| :-------- | :------- | :-------------------- |
| `tag`     | `string` | **Required** tag name |

## Feedback and Contributions

If you have any ideas for improvement or if you come across other valuable resources that can be included in the API, please feel free to open an issue on the GitHub repository. Additionally, if you would like to contribute to the project directly, pull requests are welcome.

## Authors

- [@ralacerda](https://github.com/ralacerda)
