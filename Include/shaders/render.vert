#version 300 es
in vec2 a_uv;

uniform sampler2D u_posTex;
uniform sampler2D u_colorTex;
uniform float u_pointSize;

out vec3 v_color;

void main() {
    vec2 pos = texture(u_posTex, a_uv).rg;
    v_color = texture(u_colorTex, a_uv).rgb;

    gl_Position = vec4(pos * 0.15, 0.0, 1.0);
    gl_PointSize = u_pointSize;
}