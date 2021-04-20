# eslint-plugin-checkhost

`检查vue <template>模板中的域名，提示将jd.com 更换为jdl.cn`

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-checkhost`:

```
$ npm install eslint-plugin-checkhost --save-dev
```


## Usage

Add `checkhost` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "checkhost"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "checkhost/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





