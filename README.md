# Secret File Action

⚠️ DEPRECATED: This action is no longer maintained. Use an inline run step instead. Example: [alternative.yml](./.github/workflows/alternative.yml).

## Description

Write a secret to a local file during a workflow.

## Inputs

### `secret`

**Required** The secret to write to a file.

### `b64-decode`

**Required** Indicates whether to base64 decode the secret value. Default `true`.

## Outputs

### `file`

The file the secret was written to.

## Example usage

```yml
steps:

  - name: GPG Key Secret File
    uses: ttd2089/secret-file-action@v1.1
    id: gpg-key-secret
    with:
      secret: ${{ secrets.GPG_KEY }}
      b64-decode: true

  - name: Import GPG Key
    env:
      GPG_KEY_FILE: ${{ steps.gpg-key-secret.outputs.file }}
    run: gpg --batch --import $GPG_KEY_FILE

```
